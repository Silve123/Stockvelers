import {useEffect, useState} from 'react';
import {collection, getDocs} from 'firebase/firestore';
import {db} from './firebase-config';
import {doc, getDoc} from 'firebase/firestore';

const useFirestoreData = userEmailAddress => {
  const [stockvels, setStockvels] = useState([]);
  const [userBalance, setUserBalance] = useState({});
  const [currentStockvel, setCurrentStockvel] = useState(null);
  const stockvelsCollectionRef = collection(db, 'Stockvels');
  const userBalanceRef = collection(db, 'Users');

  const getUserBalance = async () => {
    try {
      console.log(userEmailAddress);
      if (userEmailAddress) {
        const userDocRef = doc(userBalanceRef, 'TgElKCrBsL9pvLs2thUE');
        const docSnapshot = await getDoc(userDocRef);

        if (docSnapshot.exists()) {
          const userBalanceData = docSnapshot.data();
          const userRawBalance =
            userBalanceData[userEmailAddress]?.balance || 0;
          const userInvestment =
            userBalanceData[userEmailAddress]?.investment_balance || 0;
          const userStatement =
            userBalanceData[userEmailAddress]?.statement || [];
          setUserBalance({
            balance: userRawBalance,
            investment_balance: userInvestment,
            statement: userStatement,
          });
        } else {
          console.log('Document does not exist');
        }
      } else {
        console.log('User email address not found');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getStockvels = async () => {
    try {
      const data = await getDocs(stockvelsCollectionRef);
      const filteredData = data.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setStockvels(filteredData);
    } catch (err) {
      console.log(err);
    }
  };

  const upateCurrentStockvel = newStockvel => {
    setCurrentStockvel(newStockvel);
  };

  const currentStockvelUpdate = stockvelId => {
    for (const stock in stockvels) {
      console.log(stock.id, stockvelId);
      if ((stockvelId = stock.id)) {
        setCurrentStockvel(stock);
        console.log('done setting it');
      }
    }
  };

  useEffect(() => {
    // Fetch data only if userEmailAddress exists
    if (userEmailAddress) {
      getStockvels();
      getUserBalance();
    }
  }, [userEmailAddress]);

  const updateStockvels = async () => {
    await getStockvels();
  };

  const updateBalance = async () => {
    await getUserBalance();
  };

  return {
    userBalance,
    stockvels,
    updateStockvels,
    updateBalance,
    currentStockvel,
    upateCurrentStockvel,
    currentStockvelUpdate,
  };
};

export default useFirestoreData;
