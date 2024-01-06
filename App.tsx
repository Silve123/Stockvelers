import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import useAuth from './screens/firebasefiles/useAuth';
import UserStockvelsScreen from './screens/UserStockvelsScreen';
import StockvelScreen from './screens/StockvelScreen';
import FinacialScreen from './screens/FinacialScreen';
import useFirestoreData from './screens/firebasefiles/useFirestoreData';
import {getAuth} from 'firebase/auth';
import NewStockvelScreen from './screens/NewStockvelScreen';

const Stack = createStackNavigator();

const App = () => {
  const user = useAuth();
  const auth = getAuth();
  const {
    userBalance,
    stockvels,
    updateStockvels,
    updateBalance,
    currentStockvel,
    upateCurrentStockvel,
    currentStockvelUpdate,
  } = useFirestoreData(auth.currentUser?.email);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {user ? (
          <>
            <Stack.Screen name="Home">
              {props => (
                <HomeScreen
                  {...props}
                  stockvels={stockvels}
                  userBalance={userBalance}
                  upateCurrentStockvel={upateCurrentStockvel}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Stockvels">
              {props => (
                <UserStockvelsScreen
                  {...props}
                  stockvels={stockvels}
                  userBalance={userBalance}
                  upateCurrentStockvel={upateCurrentStockvel}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Balance">
              {props => (
                <FinacialScreen
                  {...props}
                  userBalance={userBalance}
                  updateFirestoreBalance={updateBalance}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Stockvel">
              {props => (
                <StockvelScreen
                  {...props}
                  currentStockvel={currentStockvel}
                  updateStockvels={updateStockvels}
                  updateBalance={updateBalance}
                  currentStockvelUpdate={currentStockvelUpdate}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Creation">
              {props => (
                <NewStockvelScreen
                  updateStockvels={updateStockvels}
                  {...props}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
