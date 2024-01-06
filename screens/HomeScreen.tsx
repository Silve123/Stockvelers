import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {getAuth} from 'firebase/auth';
import StockvelList from './components/StockvelList';
import Navbar from './components/NavBar';
import {AlertComponent} from './components/AlertComponent';
import LoadingComponent from './components/LoadingComponent';

const HomeScreen = ({stockvels, upateCurrentStockvel, userBalance}) => {
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const triggerAlert = message => {
    setAlertMessage(message);
    setShowAlert(true);
  };
  const filteredStockvels = stockvels
    .map(stockvel => ({
      ...stockvel,
      id: stockvel.id,
    }))
    .filter(stockvel => {
      const members = stockvel.members || {}; // Ensure members is an object to safely access length property
      const userEmailAddress = getAuth().currentUser?.email;
      const maxPeople = stockvel.rules.people;

      // Check if the number of members is less than the defined limit
      return (
        !(Object.keys(members).length >= maxPeople) &&
        !(members && members[userEmailAddress])
      );
    });

  const getHeader = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const displayName = user.displayName;
      const photoURL = user.photoURL;

      return (
        <View style={styles.nameContainer}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>
              Hey{' '}
              {displayName
                ? displayName
                : "Don't forget to set up your profile " + user.email}
            </Text>
            <View style={photoURL ? styles.cycleView : styles.greyBackground}>
              {photoURL ? (
                <Image source={{uri: photoURL}} style={styles.userPhoto} />
              ) : null}
            </View>
          </View>
          <View style={styles.balanceContainer}>
            <Text style={styles.balanceText}>
              Balance: R{userBalance.balance}
            </Text>
            <Text style={styles.balanceText}>
              Investment: R{userBalance.investment_balance}
            </Text>
          </View>
        </View>
      );
    } else {
      if (!user) {
        triggerAlert('No user is currently signed in');
      }
    }
  };

  return (
    <View style={styles.HomeContainer}>
      {/* Check if stockvels data is still loading */}
      {getHeader()}
      {filteredStockvels.length === 0 ? (
        <LoadingComponent />
      ) : (
        <>
          <StockvelList
            stockvels={filteredStockvels}
            upateCurrentStockvel={upateCurrentStockvel}
          />
        </>
      )}
      <View style={styles.spaceBottom}></View>
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
  HomeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  nameContainer: {
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    borderRadius: 10,
  },
  greeting: {
    color: 'black',
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  balanceText: {
    color: 'black',
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
  },
  TouchableOpacity: {
    color: 'blue',
    marginTop: 10,
  },
  spaceBottom: {
    padding: 20,
  },
  cycleView: {
    borderWidth: 3,
    borderColor: '#950e0f',
    borderRadius: 50,
  },
  greyBackground: {
    borderWidth: 3,
    borderColor: '#950e0f',
    backgroundColor: '#950e0f',
    borderRadius: 50,
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -5,
  },
  userPhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});

export default HomeScreen;
