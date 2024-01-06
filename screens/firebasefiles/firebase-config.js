import {initializeApp} from 'firebase/app';
import {getAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBg3FYgJBkEbvunqzw6cndqZKKVvjEppSg',
  authDomain: 'stockvelers-v1.firebaseapp.com',
  projectId: 'stockvelers-v1',
  storageBucket: 'stockvelers-v1.appspot.com',
  messagingSenderId: '481753932660',
  appId: '1:481753932660:web:acb99f42e47e9a3f4c4221',
};

const app = initializeApp(firebaseConfig);

const authentication = getAuth(app);
const persistence = getReactNativePersistence(ReactNativeAsyncStorage);

authentication
  .setPersistence(persistence)
  .then(() => {
    console.log(
      'Firebase Auth persistence enabled using React Native Async Storage',
    );
  })
  .catch(error => {
    console.error('Error enabling Firebase Auth persistence:', error);
  });

export default authentication;
export const db = getFirestore(app);
