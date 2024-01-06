import {useState, useEffect} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import authentication from './firebase-config';

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, authUser => {
      setUser(authUser);
    });

    return unsubscribe;
  }, []);

  return user;
};

export default useAuth;
