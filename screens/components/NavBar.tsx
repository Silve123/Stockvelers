import React from 'react';
import { Pressable, StatusBar, StyleSheet, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-ico-material-design';
import { getAuth, signOut } from 'firebase/auth';

var iconHeight = 26;
var iconWidth = 26;

const Navbar = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        changeScreen('Login');
      })
      .catch(error => {
        console.error('Error signing out:', error);
      });
  };

  const changeScreen = text => {
    navigation.navigate(text);
  };

  const isActive = screenName => {
    return route.name === screenName;
  };

  return (
    <View style={styles.container}>
      <View>
        <StatusBar style="auto" />
      </View>
      <View style={styles.NavContainer}>
        <View style={styles.Nav}>
          <Pressable
            onPress={() => changeScreen('Home')}
            style={[
              styles.IconBehaves,
              {
                backgroundColor: isActive('Home') ? '#950e0f' : 'transparent',
              },
            ]}
            android_ripple={{ borderless: true, radius: 50 }}>
            <Icon
              name="home-button"
              height={iconHeight}
              width={iconWidth}
              color={isActive('Home') ? 'white' : '#950e0f'}
            />
          </Pressable>

          <Pressable
            onPress={() => changeScreen('Stockvels')}
            style={[
              styles.IconBehaves,
              {
                backgroundColor: isActive('Stockvels')
                  ? '#950e0f'
                  : 'transparent',
              },
            ]}
            android_ripple={{borderless: true, radius: 50}}>
            <Icon
              name="new-tab"
              height={iconHeight}
              width={iconWidth}
              color={isActive('Stockvels') ? 'white' : '#950e0f'}
            />
          </Pressable>

          <Pressable
            onPress={() => changeScreen('Profile')}
            style={[
              styles.IconBehaves,
              {
                backgroundColor: isActive('Profile')
                  ? '#950e0f'
                  : 'transparent',
              },
            ]}
            android_ripple={{borderless: true, radius: 50}}>
            <Icon
              name="user-shape"
              height={iconHeight}
              width={iconWidth}
              color={isActive('Profile') ? 'white' : '#950e0f'}
            />
          </Pressable>

          <Pressable
            onPress={() => changeScreen('Balance')}
            style={[
              styles.IconBehaves,
              {
                backgroundColor: isActive('Balance')
                  ? '#950e0f'
                  : 'transparent',
              },
            ]}
            android_ripple={{borderless: true, radius: 50}}>
            <Icon
              name="credit-card"
              height={iconHeight}
              width={iconWidth}
              color={isActive('Balance') ? 'white' : '#950e0f'}
            />
          </Pressable>

          <Pressable
            onPress={() => handleLogout()}
            style={styles.IconBehaves}
            android_ripple={{borderless: true, radius: 50}}>
            <Icon
              name="close-button"
              height={iconHeight}
              width={iconWidth}
              color="#950e0f"
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  NavContainer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 10,
  },
  Nav: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '90%',
    justifyContent: 'space-evenly',
    borderRadius: 40,
  },
  IconBehaves: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
  },
});

export default Navbar;
