import {View, Text, StyleSheet, Image} from 'react-native';
import {getAuth} from 'firebase/auth';
import StockvelList from './components/StockvelList';
import Navbar from './components/NavBar';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import LoadingComponent from './components/LoadingComponent';

const UserStockvelsScreen = ({stockvels, upateCurrentStockvel, userBalance}) => {
  const userEmailAddress = getAuth().currentUser?.email;
  const navigation = useNavigation();
  const filteredStockvels = stockvels
    .map(stockvel => ({
      ...stockvel,
      id: stockvel.id, // Assuming id exists in each document
    }))
    .filter(stockvel => {
      const members = stockvel.members;

      // Replace 'userEmailAddress' with the actual user's email address
      return members && members[userEmailAddress];
    });

  const getHeader = () => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      const displayName = user.displayName;
      const photoURL = user.photoURL; // Get the user's photo URL

      return (
        <View style={styles.nameContainer}>
          <View style={styles.balanceContainer}>
            <TouchableOpacity
              style={styles.Creation}
              onPress={() => navigation.navigate('Creation')}>
              <Text style={styles.BtnText}>Create New Stockvel</Text>
            </TouchableOpacity>
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
      console.log('No user is currently signed in');
    }
  };
  console.log(stockvels);
  return (
    <View style={styles.HomeContainer}>
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
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  Creation: {
    marginTop: 10,
    marginLeft: 10,
    padding: 10,
    borderRadius: 10,
    width: 150,
    backgroundColor: '#a90000',
  },
  BtnText: {
    color: 'white',
  },
  HomeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  greeting: {
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
    marginTop: -15,
  },
  userPhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
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
  nameContainer: {
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    borderRadius: 10,
  },
});

export default UserStockvelsScreen;
