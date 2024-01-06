import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import authentication, { db } from './firebasefiles/firebase-config'; // Ensure correct import
import { useNavigation } from '@react-navigation/native';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import LoadingComponent from './components/LoadingComponent';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const userBalanceRef = collection(db, 'Users');
  const [isLoading, setIsLoading] = useState(false);

  const registerUser = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(async re => {
        try {
          setIsLoading(true);
          const userDocRef = doc(userBalanceRef, 'TgElKCrBsL9pvLs2thUE');
          const userDocSnapshot = await getDoc(userDocRef);
          const userData = userDocSnapshot.data();
          userData[email.toLowerCase()] = {
            ...userData[email.toLowerCase()],
            balance: 0,
            investment_balance: 0,
            statement: [],
          };
          await setDoc(userDocRef, userData);
          setIsLoading(false);
        } catch (err) {
          setIsLoading(false);
        }
      })
      .catch(re => {
        setIsLoading(false);
      });
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./stockvelerfullslogo.png')}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.Title}>Register</Text>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <Button color="#a90000" title="Register" onPress={registerUser} />
      <TouchableOpacity onPress={navigateToLogin}>
        <Text style={styles.TouchableOpacity}>Login</Text>
      </TouchableOpacity>
      {isLoading ? <LoadingComponent /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 30,
  },
  TouchableOpacity: {
    color: 'blue',
    marginTop: 10,
  },
  container: {
    marginTop: 50,
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginHorizontal: 'auto',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
  },
});

export default RegisterScreen;
