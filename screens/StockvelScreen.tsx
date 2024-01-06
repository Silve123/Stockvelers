import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import NavBar from './components/NavBar';
import {getAuth} from 'firebase/auth';
import styles from './components/stockvelcom/styles';
import renderStockvelDetails from './components/stockvelcom/renderStockvelDetails';
import {collection, doc, getDoc, setDoc, updateDoc} from 'firebase/firestore';
import {db} from './firebasefiles/firebase-config';
import {AlertComponent} from './components/AlertComponent';
import LoadingComponent from './components/LoadingComponent';

const StockvelScreen = ({currentStockvel, updateStockvels, updateBalance}) => {
  const navigation = useNavigation();
  const userBalanceRef = collection(db, 'Users');
  const stockvelsRef = collection(db, 'Stockvels');
  const adminRef = collection(db, 'Admin');
  const stockvelData = currentStockvel;
  const auth = getAuth();
  const user = auth.currentUser;
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const triggerAlert = message => {
    setAlertMessage(message);
    setShowAlert(true);
  };

  const handleJoin = async () => {
    const userEmailAddress = user?.email;

    try {
      setIsLoading(true);
      const userDocRef = doc(userBalanceRef, 'TgElKCrBsL9pvLs2thUE');
      const stockvelDocRef = doc(stockvelsRef, stockvelData.id);
      const userDocSnapshot = await getDoc(userDocRef);
      const stockvelDocSnapshot = await getDoc(stockvelDocRef);
      function countMembers(membersObject) {
        let count = 0;
        for (const member in membersObject) {
          if (membersObject.hasOwnProperty(member)) {
            count++;
          }
        }
        return count;
      }

      if (userDocSnapshot.exists() && stockvelDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        const stockvelData = stockvelDocSnapshot.data();
        let deductionAmount = 0;
        const numberOfMembers = countMembers(stockvelData.members);
        if (numberOfMembers !== stockvelData.rules.people) {
          if (stockvelData.type === 'Rotational') {
            deductionAmount = 5;
          } else if (stockvelData.type === 'Savings') {
            deductionAmount = 25;
          }

          if (userData[userEmailAddress].balance >= deductionAmount) {
            const joinTransaction = {
              amount: deductionAmount,
              date: new Date(),
              name: 'Joined Stockvel',
            };
            const updatedBalance =
              userData[userEmailAddress].balance - deductionAmount;

            userData[userEmailAddress].statement = [
              ...(userData[userEmailAddress].statement || []),
              joinTransaction,
            ];

            userData[userEmailAddress] = {
              ...userData[userEmailAddress],
              balance: updatedBalance,
            };

            const rotationalMember = {
              [user.email]: {
                paid: false,
                cycle: stockvelData.rules.people - numberOfMembers,
              },
            };
            const socialMember = {
              [user.email]: {paid: false},
            };
            const newMember =
              stockvelData.type === 'Rotational'
                ? rotationalMember
                : socialMember;

            await setDoc(userDocRef, userData);
            const updatedMembers = {
              ...stockvelData.members,
              ...newMember,
            };
            await updateDoc(stockvelDocRef, {
              members: updatedMembers,
            });

            const adminDocRef = doc(adminRef, 'ydVPkEv4oXqb9Mb1LIoO');
            const adminDoc = await getDoc(adminDocRef);
            const adminData = adminDoc.data();
            const updatedAdminBalance = adminData.balance + deductionAmount;
            await updateDoc(adminDocRef, {balance: updatedAdminBalance});

            if (stockvelData.rules.people - numberOfMembers === 1) {
              const activate = true;
              await updateDoc(stockvelDocRef, {
                active: activate,
                current_cycle: stockvelData.rules.people,
              });
            }
            updateBalance();
            updateStockvels();
            setIsLoading(false);
            triggerAlert('Stockvel Joined');
            navigation.navigate('Stockvels');
          } else {
            setIsLoading(false);
            triggerAlert('Insufficient balance for joining!');
          }
        } else {
          setIsLoading(false);
          triggerAlert("Reached Member's Limit");
        }
      } else {
        setIsLoading(false);
        triggerAlert('Stockvel does not exist');
      }
    } catch (err) {
      setIsLoading(false);
      triggerAlert('Error joining stockvel');
    }
  };

  const handlePay = async () => {
    const userEmailAddress = user?.email;
    try {
      setIsLoading(true);
      const userDocRef = doc(userBalanceRef, 'TgElKCrBsL9pvLs2thUE');
      console.log(stockvelData.id);
      const stockvelDocRef = doc(stockvelsRef, stockvelData.id);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        const paymentAmount = stockvelData.rules.contribution;

        if (userData[userEmailAddress].balance >= paymentAmount) {
          const updatedBalance =
            userData[userEmailAddress].balance - paymentAmount;
          const updatedInvestment =
            userData[userEmailAddress].investment_balance + paymentAmount;

          // Deduct payment from user balance
          userData[userEmailAddress] = {
            ...userData[userEmailAddress],
            balance: updatedBalance,
            investment_balance: updatedInvestment,
          };
          // Add payment to stockvel balance
          const updatedStockvelBalance = stockvelData.balance + paymentAmount;
          // Update user's paid status in stockvel members
          const updatedMembers = {
            ...stockvelData.members,
            [user.email]: {...stockvelData.members[user.email], paid: true},
          };
          const paymentTransaction = {
            amount: paymentAmount, // Set the payment amount
            date: new Date(), // Set the date/time for the transaction
            name: 'Payment Made', // A descriptive name for the transaction
          };
          // Add the payment transaction to the user's statement in Firestore
          userData[userEmailAddress].statement = [
            ...(userData[userEmailAddress].statement || []),
            paymentTransaction,
          ];
          await setDoc(userDocRef, userData);
          await updateDoc(stockvelDocRef, {
            balance: updatedStockvelBalance,
          });
          await updateDoc(stockvelDocRef, {
            members: updatedMembers,
          });
          updateBalance();
          updateStockvels();
          setIsLoading(false);
          triggerAlert('Stockvel Paid');
          navigation.navigate('Stockvels');
        } else {
          setIsLoading(false);
          triggerAlert('Insufficient balance!');
        }
      } else {
        setIsLoading(false);
        triggerAlert('Stockvel does not exist');
      }
    } catch (err) {
      setIsLoading(false);
      triggerAlert('Error making payment');
    }
  };

  const renderButtons = () => {
    let rotationalRule = false;
    try {
      rotationalRule =
        stockvelData.type === 'Rotational' &&
        stockvelData.members[user.email].cycle === stockvelData.current_cycle;
    } catch (err) {}
    if (!stockvelData.members || !stockvelData.members[user.email]) {
      // User is not a member of this stockvel
      return (
        <TouchableOpacity
          onPress={handleJoin}
          style={[styles.Join, styles.Button]}>
          <Text style={styles.ButtonText}>Join</Text>
        </TouchableOpacity>
      );
    } else if (
      stockvelData.members[user.email] &&
      !stockvelData.members[user.email].paid &&
      !rotationalRule
    ) {
      // User is a member but has not paid
      return (
        <TouchableOpacity
          onPress={handlePay}
          style={[styles.Pay, styles.Button]}>
          <Text style={styles.ButtonText}>Pay</Text>
        </TouchableOpacity>
      );
    } else if (rotationalRule) {
      return <Text>No need to pay your recieving the payout</Text>;
    } else {
      // User is a member and has already paid
      return <Text>You have already paid</Text>;
    }
  };

  return (
    <View style={styles.HomeContainer}>
      <ImageBackground
        source={
          stockvelData.type === 'Savings'
            ? require('./components/savings.jpeg')
            : require('./components/rotational.jpeg')
        }
        resizeMode="cover"
        style={styles.imageBackground}
      />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.detailsContainer}>
          {renderStockvelDetails(stockvelData, user)}
          {/* Render buttons */}
          <AlertComponent
            alertMessage={alertMessage}
            setAlertMessage={setAlertMessage}
            showAlert={showAlert}
            setShowAlert={setShowAlert}
          />
          {renderButtons()}
        </View>
        <View style={{padding: 10}}></View>
      </ScrollView>
      {isLoading ? <LoadingComponent /> : null}
      <NavBar />
    </View>
  );
};

export default StockvelScreen;
