import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {getAuth} from 'firebase/auth';
import {
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
  Timestamp,
} from 'firebase/firestore'; // Import serverTimestamp from Firebase's Firestore
import {db} from './firebasefiles/firebase-config';
import Navbar from './components/NavBar';
import {AlertComponent} from './components/AlertComponent';
import LoadingComponent from './components/LoadingComponent';
import { TouchableHighlight } from 'react-native-gesture-handler';

const FinacialScreen = ({userBalance, updateFirestoreBalance}) => {
  let balance = userBalance.balance;
  let investment_balance = userBalance.investment_balance;
  const [amount, setAmount] = useState('');
  const userBalanceRef = collection(db, 'Users');
  const [statement, setStatement] = useState(userBalance.statement || []);
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const userEmailAddress = currentUser ? currentUser.email : '';
  const [isLoading, setIsLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const triggerAlert = message => {
    setAlertMessage(message);
    setShowAlert(true);
  };
  const newTransaction = {
    amount: 1500,
    date: serverTimestamp(),
    name: '',
  };

  const handleDeposit = async () => {
    setIsLoading(true);
    if (!isNaN(parseFloat(amount)) && isFinite(amount)) {
      const newBalance = parseFloat(amount) + balance;
      newTransaction.name = 'Deposit';
      newTransaction.date = serverTimestamp();
      newTransaction.amount = parseFloat(amount);
      await updateBalance({balance: newBalance}, newTransaction);
    } else {
      setIsLoading(false);
      triggerAlert('Please enter a valid number for deposit.');
    }
  };

  const handleWithdraw = async () => {
    setIsLoading(true);
    if (!isNaN(parseFloat(amount)) && isFinite(amount)) {
      const withdrawalAmount = parseFloat(amount);

      if (withdrawalAmount >= 200) {
        if (balance >= withdrawalAmount) {
          const newBalance = balance - withdrawalAmount;
          newTransaction.name = 'Withdrawal';
          newTransaction.date = serverTimestamp();
          newTransaction.amount = withdrawalAmount;
          await updateBalance({balance: newBalance}, newTransaction);
        } else {
          setIsLoading(false);
          triggerAlert('You do not have enough funds for this withdrawal.');
        }
      } else {
        setIsLoading(false);
        triggerAlert('Please note minimum withdrawal is R200.');
      }
    } else {
      setIsLoading(false);
      triggerAlert('Please enter a valid number for withdrawal.');
    }
  };

  const updateBalance = async (updateData, newTransaction) => {
    try {
      const userDocRef = doc(userBalanceRef, 'TgElKCrBsL9pvLs2thUE');
      const userDocSnapshot = await getDoc(userDocRef);
      
      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        console.log(userData);
        console.log('in here', userEmailAddress);
        if (userData[userEmailAddress]) {
          // Update balance and investment_balance fields
          userData[userEmailAddress].balance =
            updateData.balance || userData[userEmailAddress].balance;
          userData[userEmailAddress].investment_balance =
            updateData.investment_balance ||
            userData[userEmailAddress].investment_balance;

          // Create a Firestore Timestamp
          const currentTime = Timestamp.now();
          
          // Create a new transaction object with the Firestore Timestamp
          const formattedTransaction = {
            amount: newTransaction.amount,
            date: currentTime,
            name: newTransaction.name,
          };

          // Add the new transaction to the 'statement' array of the specific user
          userData[userEmailAddress].statement = [
            ...(userData[userEmailAddress].statement || []),
            formattedTransaction,
          ];

          // Update the specific user's data in the main document
          await setDoc(userDocRef, userData);
          updateFirestoreBalance();
          setAmount('');
          setStatement(userData[userEmailAddress].statement);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          console.log('User not found');
        }
      } else {
        setIsLoading(false);
        console.log('Document does not exist');
      }
    } catch (err) {
      setIsLoading(false);
      console.error('Error updating balance:', err);
    }
  };

  const getColor = name => {
    return name === 'Deposit' ? {color: 'green'} : {color: 'red'};
  };

  const getOperator = name => {
    return '+' ? name === 'Deposit' : '-';
  };

  useEffect(() => {
    if (!statement.length && userBalance && userBalance.statement) {
      setStatement(userBalance.statement);
    }
  }, [statement, userBalance]);

  return (
    <View style={styles.HomeContainer}>
      <View style={styles.rowForBalance}>
        <View style={styles.row}>
          <Text style={styles.balanceText}>Balance: </Text>
          <Text style={styles.moneyText}>R{balance}</Text>
        </View>
        <View style={styles.endSpace} />
        <View style={styles.endSpace} />
        <View style={styles.endSpace} />
        <View style={styles.row}>
          <Text style={styles.balanceText}>Investment: </Text>
          <Text style={styles.moneyText}>R{investment_balance}</Text>
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={text => setAmount(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[{backgroundColor: 'darkgreen'}, styles.Button]}
          onPress={handleDeposit}>
          <Text style={styles.buttonText}>Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[{backgroundColor: 'red'}, styles.Button]}
          onPress={handleWithdraw}>
          <Text style={styles.buttonText}>Widthdraw</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.statementText}>Statement</Text>
      <View style={styles.transactionHeadings}>
        <Text style={styles.bold}>Type</Text>
        <Text style={styles.bold}>Date</Text>
        <Text style={styles.bold}>Amount</Text>
      </View>
      <ScrollView style={styles.statementContainer}>
        {/* Displaying the statement */}
        {statement
          .slice()
          .reverse()
          .map((transaction, index) => (
            <View key={index} style={styles.transactionContainer}>
              <Text style={styles.small}>{transaction.name}</Text>
              <Text style={styles.small}>
                {transaction.date.toDate().toDateString()}
              </Text>
              <Text style={[styles.small, getColor(transaction.name)]}>
                {getOperator(transaction.name)}R{transaction.amount}
              </Text>
            </View>
          ))}
        <View style={styles.endSpace}></View>
      </ScrollView>
      <AlertComponent
        alertMessage={alertMessage}
        setAlertMessage={setAlertMessage}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
      />
      {isLoading ? <LoadingComponent /> : null}
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
    paddingHorizontal: 10,
  },
  row: {
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  rowForBalance: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 0.2,
  },
  Button: {
    width: '40%',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 10,
  },
  statementContainer: {
    width: '90%',
    height: 250,
    backgroundColor: 'grey',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  transactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
    padding: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  transactionHeadings: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  bold: {
    fontWeight: 'bold',
    paddingHorizontal: 15,
    color: 'black',
  },
  statementText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    marginTop: 15,
    marginBottom: -15,
  },
  small: {
    color: 'black',
    fontSize: 10,
  },
  endSpace: {
    padding: 10,
  },
  balanceText: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: 'black',
  },
  moneyText: {
    fontWeight: 'bold',
    color: 'green',
  },
});

export default FinacialScreen;
