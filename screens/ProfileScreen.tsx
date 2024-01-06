import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, Image, Text, StyleSheet} from 'react-native';
import {getAuth, onAuthStateChanged, updateProfile} from 'firebase/auth';
import {AlertComponent} from './components/AlertComponent';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Navbar from './components/NavBar';
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import {launchImageLibrary} from 'react-native-image-picker';
import LoadingComponent from './components/LoadingComponent';

const storage = getStorage();

const ProfileScreen = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const photoURL = user.photoURL;
  const navigation = useNavigation();
  const [displayName, setDisplayName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userVerified, setUserVerified] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const triggerAlert = message => {
    setAlertMessage(message);
    setShowAlert(true);
  };
  const chooseImage = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (!response.assets[0].uri) {
        console.log('Failed to get image URI', response.assets[0].uri);
      } else {
        setImage(response.assets[0].uri);
      }
    });
  };

  useEffect(() => {
    if (photoURL) {
      setImage(photoURL);
    }
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUserEmail(user.email || '');
        setDisplayName(user.displayName || '');
        setUserVerified(user.emailVerified);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const uploadImage = async (imageURI, currentUser) => {
    try {
      const storageRef = ref(storage, `user_images/${currentUser.uid}`);
      const response = await fetch(imageURI);
      const blob = await response.blob();

      // Upload the image to Firebase Storage
      await uploadBytes(storageRef, blob);

      // Get the download URL of the uploaded image
      const downloadURL = await getDownloadURL(storageRef);

      return downloadURL; // Return the download URL of the uploaded image
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  };

  const updateUser = async () => {
    setLoading(true);
    const authUser = getAuth().currentUser;

    // Check if both name and image are updated
    if (displayName !== authUser.displayName && image) {
      try {
        const downloadURL = await uploadImage(image, authUser);

        // Update name and image URL in the user profile
        await updateProfile(authUser, {
          displayName: displayName,
          photoURL: downloadURL,
        });

        triggerAlert('Profile updated with name and image');
        navigation.navigate('Home');
      } catch (error) {
        console.error('Error updating profile:', error);
        // Handle error scenario here
      }
    }
    // Check if only the name is updated
    else if (displayName !== authUser.displayName && !image) {
      try {
        await updateProfile(authUser, {
          displayName: displayName,
        });

        triggerAlert('Profile updated with name');
        navigation.navigate('Home');
      } catch (error) {
        console.error('Error updating name in profile:', error);
        // Handle error scenario here
      }
    }
    // Check if only the image is updated
    else if (displayName === authUser.displayName && image) {
      try {
        const downloadURL = await uploadImage(image, authUser);

        // Update image URL in the user profile
        await updateProfile(authUser, {
          photoURL: downloadURL,
        });

        triggerAlert('Profile updated with image');
        navigation.navigate('Home');
      } catch (error) {
        console.error('Error updating profile with image:', error);
        // Handle error scenario here
      }
    }
    // If nothing is updated
    else {
      triggerAlert('No updates');
    }
    setLoading(false);
  };
  const verifyUser = () => {
    console.log('verifying...');
  };
  return (
    <View style={styles.homeContainer}>
      {loading ? <LoadingComponent /> : null}
      <View style={styles.row}>
        <View style={styles.row}>
          <Text>Name: </Text>
          <TextInput
            placeholder={displayName ? displayName : 'Name'}
            value={displayName}
            onChangeText={text => setDisplayName(text)}
          />
        </View>
        <View style={styles.uploadContainer}>
          {image ? (
            <TouchableOpacity
              style={styles.imageContainer}
              onPress={chooseImage}>
              <Image
                source={{uri: image}}
                style={{width: 80, height: 80, borderRadius: 50}}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.uploadButton} onPress={chooseImage}>
              <Text>Upload image</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.verifyContainer}>
        <Text>Verified: </Text>
        {userVerified ? (
          <Text style={{color: 'black'}}>Verified</Text>
        ) : (
          <TouchableOpacity style={styles.verifyOpacity} onPress={verifyUser}>
            <Text style={{color: 'white'}}>Verify</Text>
          </TouchableOpacity>
        )}
      </View>
      <TextInput placeholder="Email" value={userEmail} editable={false} />
      <Button color="#a90000" title="Update" onPress={updateUser} />
      <AlertComponent
        alertMessage={alertMessage}
        setAlertMessage={setAlertMessage}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
      />
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 10,
  },
  uploadContainer: {
    alignItems: 'center',
    margin: 10,
  },
  uploadButton: {
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#950e0f',
    borderRadius: 50,
  },
  imageContainer: {
    backgroundColor: 'grey',
    borderWidth: 3,
    borderRadius: 50,
    borderColor: '#950e0f',
    marginTop: 10,
    marginBottom: -15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  verifyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifyOpacity: {
    marginHorizontal: 20,
    backgroundColor: '#950e0f',
    padding: 10,
    borderRadius: 10,
  },
});

export default ProfileScreen;
