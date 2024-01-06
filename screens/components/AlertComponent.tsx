import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

const AlertComponent = ({ alertMessage, setAlertMessage, showAlert, setShowAlert }) => {
  useEffect(() => {
    if (showAlert) {
      Alert.alert('Message', alertMessage);
      setShowAlert(false);
      setAlertMessage('');
    }
  }, [alertMessage, showAlert, setAlertMessage, setShowAlert]);

  return null;
};

export {AlertComponent};
