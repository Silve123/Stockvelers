import {getAuth} from 'firebase/auth';
import {Timestamp, addDoc, collection} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {View, TextInput, Button, StyleSheet, Text, TouchableHighlight} from 'react-native';
import {CheckBox} from 'react-native-elements';
import Nav from './components/NavBar.tsx';
import {db} from './firebasefiles/firebase-config.js';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {AlertComponent} from './components/AlertComponent.tsx';
import { color } from 'react-native-elements/dist/helpers/index';

const CreateStockvelScreen = ({updateStockvels}) => {
  const [type, setType] = useState('Rotational');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [contribution, setContribution] = useState(0);
  const [interval, setInvterval] = useState('Monthly');
  const [peopleCount, setPeopleCount] = useState(0);
  const [payoutDate, setPayoutDate] = useState(Timestamp.now());
  const [boxType, setBoxType] = useState('Rotational');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const auth = getAuth();
  const navigation = useNavigation();
  const currentUser = auth.currentUser;
  const userEmailAddress = currentUser ? currentUser.email : '';
  const bgColor = 'lightgrey';
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const triggerAlert = message => {
    setAlertMessage(message);
    setShowAlert(true);
  };

  const formatDate = timestamp => {
    const date = timestamp.toDate();
    return date.toDateString();
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      const timestamp = Timestamp.fromDate(selectedDate);
      setPayoutDate(timestamp);
    }
  };

  const createStockvel = async () => {
    const defaultKeys = {
      type: type,
      active: false,
      current_cycle: 0,
      name: name,
      description: description,
      balance: 0,
    };

    const newRotationalStockvel = {
      rules: {
        contribution: contribution,
        interval: interval,
        people: peopleCount,
      },
      members: {
        [userEmailAddress]: {
          paid: false,
          cycle: peopleCount,
        },
      },
    };

    const newSocialStockvel = {
      rules: {
        contribution: contribution,
        interval: interval,
        payout: payoutDate,
        people: peopleCount,
      },
      members: {
        [userEmailAddress]: {
          paid: false,
        },
      },
    };

    try {
      const stockvelsCollectionRef = collection(db, 'Stockvels');
      if (type == 'Rotational') {
        defaultKeys.rules = newRotationalStockvel.rules;
        defaultKeys.members = newRotationalStockvel.members;
      } else {
        defaultKeys.rules = newSocialStockvel.rules;
        defaultKeys.members = newSocialStockvel.members;
      }
      const docRef = await addDoc(stockvelsCollectionRef, defaultKeys);
      updateStockvels();
      triggerAlert('Stockvel: ' + {name} + 'created');
      navigation.navigate('Stockvels');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <View style={styles.HomeContainer}>
      <ScrollView>
        <CheckBox
          title="*    Savings Stockvel"
          checked={boxType === 'Savings'}
          onPress={() => {
            setType('Savings');
            setBoxType('Savings');
          }}
          containerStyle={
            boxType === 'Savings'
              ? styles.checkedBackground
              : styles.unCheckedBackground
          }
          checkedIcon={null}
          uncheckedIcon={null}
          textStyle={
            boxType === 'Savings' ? styles.checkedText : styles.defaultText
          }
        />
        {type === 'Savings' && (
          <View
            style={[
              {
                padding: 20,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'grey',
              },
            ]}>
            {/* Form inputs specific to Rotational Stockvel */}
            <View style={styles.row}>
              <Text>Name</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={text => {
                  setName(text);
                }}
              />
            </View>
            <View style={styles.row}>
              <Text>Description</Text>
              <TextInput
                style={styles.input}
                value={description}
                onChangeText={text => {
                  setDescription(text);
                }}
              />
            </View>
            <View style={styles.row}>
              <Text>Contribution(Rands)</Text>
              <TextInput
                style={styles.numberInput}
                onChangeText={text => {
                  const parsedValue = parseInt(text, 10);
                  if (!isNaN(parsedValue)) {
                    setContribution(parsedValue);
                  } else {
                  }
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.checkboxRow}>
              <CheckBox
                title="Weekly"
                checked={interval === 'Weekly'}
                onPress={() => setInvterval('Weekly')}
                containerStyle={
                  interval === 'Weekly' ? styles.checkedCheckBox : styles.uncheckedCheckBox
                }
                textStyle={styles.whiteText}
                checkedIcon={null}
                uncheckedIcon={null}
              />
              <CheckBox
                title="Monthly"
                checked={interval === 'Monthly'}
                onPress={() => setInvterval('Monthly')}
                containerStyle={
                  interval === 'Monthly' ? styles.checkedCheckBox : styles.uncheckedCheckBox
                }
                textStyle={styles.whiteText}
                checkedIcon={null}
                uncheckedIcon={null}
              />
              <CheckBox
                title="Annually"
                checked={interval === 'Annually'}
                onPress={() => setInvterval('Annually')}
                containerStyle={
                  interval === 'Annually' ? styles.checkedCheckBox : styles.uncheckedCheckBox
                }
                textStyle={styles.whiteText}
                checkedIcon={null}
                uncheckedIcon={null}
              />
            </View>
            <TouchableHighlight
              style={styles.dateButton}
              underlayColor="grey"
              onPress={() => setShowDatePicker(true)}>
              <Text style={styles.dateButtonText}>Pick Date</Text>
            </TouchableHighlight>
            <Text>Payout Date: {formatDate(payoutDate)}</Text>
            {showDatePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={payoutDate.toDate()}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={handleDateChange}
              />
            )}
            <View style={styles.row}>
              <Text>Max People</Text>
              <TextInput
                style={styles.numberInput}
                value={String(peopleCount)}
                onChangeText={text => {
                  const parsedValue = parseInt(text, 10);
                  if (!isNaN(parsedValue)) {
                    setPeopleCount(parsedValue);
                  } else {
                  }
                }}
                keyboardType="numeric"
              />
            </View>
          </View>
        )}

        <CheckBox
          title="*    Rotational Stockvel"
          checked={boxType === 'Rotational'}
          onPress={() => {
            setType('Rotational');
            setBoxType('Rotational');
          }}
          containerStyle={
            boxType === 'Rotational' ? styles.checkedBackground : styles.unCheckedBackground
          }
          checkedIcon={null}
          uncheckedIcon={null}
          textStyle={
            boxType === 'Rotational' ? styles.checkedText : styles.defaultText
          }
        />
        {type === 'Rotational' && (
          <View
            style={[
              {
                padding: 20,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: 'grey',
              },
            ]}>
            {/* Form inputs specific to Rotational Stockvel */}
            <View style={styles.row}>
              <Text>Name</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={text => {
                  setName(text);
                }}
              />
            </View>
            <View style={styles.row}>
              <Text>Description</Text>
              <TextInput
                style={styles.input}
                value={description}
                onChangeText={text => {
                  setDescription(text);
                }}
              />
            </View>
            <View style={styles.row}>
              <Text>Contribution(Rands)</Text>
              <TextInput
                style={styles.numberInput}
                onChangeText={text => {
                  const parsedValue = parseInt(text, 10);
                  if (!isNaN(parsedValue)) {
                    setContribution(parsedValue);
                  } else {
                  }
                }}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.checkboxRow}>
              <CheckBox
                title="Weekly"
                checked={interval === 'Weekly'}
                onPress={() => setInvterval('Weekly')}
                containerStyle={
                  interval === 'Weekly' ? styles.checkedCheckBox : styles.uncheckedCheckBox
                }
                textStyle={styles.whiteText}
                checkedIcon={null}
                uncheckedIcon={null}
              />
              <CheckBox
                title="Monthly"
                checked={interval === 'Monthly'}
                onPress={() => setInvterval('Monthly')}
                containerStyle={
                  interval === 'Monthly' ? styles.checkedCheckBox : styles.uncheckedCheckBox
                }
                textStyle={styles.whiteText}
                checkedIcon={null}
                uncheckedIcon={null}
              />
              <CheckBox
                title="Annually"
                checked={interval === 'Annually'}
                onPress={() => setInvterval('Annually')}
                containerStyle={
                  interval === 'Annually' ? styles.checkedCheckBox : styles.uncheckedCheckBox
                }
                textStyle={styles.whiteText}
                checkedIcon={null}
                uncheckedIcon={null}
              />
            </View>
            <View style={styles.row}>
              <Text>Max People</Text>
              <TextInput
                style={styles.numberInput}
                value={parseInt(peopleCount, 10)}
                onChangeText={text => {
                  const parsedValue = parseInt(text, 10);
                  if (!isNaN(parsedValue)) {
                    setPeopleCount(parsedValue);
                  } else {
                  }
                }}
                keyboardType="numeric"
              />
            </View>
          </View>
        )}

        <Button
          color="#9d0506"
          title="Create Stockvel"
          onPress={createStockvel}
        />
        <View style={styles.spaceBottom} />
      </ScrollView>
      <AlertComponent
        alertMessage={alertMessage}
        setAlertMessage={setAlertMessage}
        showAlert={showAlert}
        setShowAlert={setShowAlert}
      />
      <Nav />
    </View>
  );
};

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  checkboxRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  input: {
    margin: 5,
    borderWidth: 0.7,
    width: '70%',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  checkedCheckBox: {
    height: 50,
    backgroundColor: '#9d0506',
    borderRadius: 10,
    marginVertical: 5,
    zIndex: 1,
  },
  uncheckedCheckBox: {
    height: 40,
    backgroundColor: 'grey',
    borderWidth: 0,
    borderRadius: 10,
    marginVertical: 5,
  },
  checkedBackground: {
    backgroundColor: '#9d0506',
    borderRadius: 10,
  },
  unCheckedBackground: {
    borderRadius: 10,
    backgroundColor: 'grey',
  },
  checkedText: {
    color: 'white',
  },
  defaultText: {
    color: 'white',
  },
  spaceBottom: {
    padding: 40,
  },
  whiteText: {
    color: 'white',
  },
  numberInput: {
    margin: 5,
    borderWidth: 0.7,
    width: '30%',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  customButton: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'lightblue',
  },
  dateButton: {
    width: '40%',
    padding: 10,
    backgroundColor: '#9d0506',
    borderRadius: 10,
    margin: 10,
  },
  dateButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default CreateStockvelScreen;
