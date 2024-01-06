import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import {
  AuthErrorCodes,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log('Login successful', res);
      })
      .catch(error => {
        if (error.code === AuthErrorCodes.INVALID_CREDENTIAL) {
          setError('Incorrect Password');
        } else if (error.code === AuthErrorCodes.INVALID_EMAIL) {
          setError('Incorrect Email');
        } else {
          setError('Login failed. Please try again.');
        }
      });
  };

  const navigateToRegister = () => {
    navigation.navigate('Register');
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
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
      />
      <Button color="#a90000" title="Login" onPress={handleLogin} />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity onPress={navigateToRegister}>
        <Text style={styles.TouchableOpacity}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
    marginBottom: 20,
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
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default LoginScreen;
