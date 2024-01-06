import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';

const StockvelList = ({stockvels, upateCurrentStockvel}) => {
  const navigation = useNavigation();
  const renderStockvel = ({item}) => {
    const {name, description, rules, type} = item;
    const getImage = () => {
      const rotationalIMG = require('./rotational.jpeg');
      const savingsIMG = require('./savings.jpeg');
      if (type === 'Savings') {
        return savingsIMG;
      }
      return rotationalIMG;
    };
    const renderPayoutRule = () => {
      if (type === 'Savings') {
        return (
          <Text style={styles.rules}>
            {' '}
            {rules.payout
              ? rules.payout.toDate().toDateString()
              : 'Not available'}
          </Text>
        );
      }
      return null;
    };

    const toStockvelScreen = (item) => {
      upateCurrentStockvel(item);
      navigation.navigate('Stockvel');
    };
    return (
      <ImageBackground
        source={getImage()}
        resizeMode="cover"
        imageStyle={[styles.image]}
        style={[styles.image]}>
        <TouchableOpacity
          style={[styles.cardContainer]}
          onPress={() => toStockvelScreen(item)}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.rulesContainer}>
            <Text style={styles.rules}>
              Contribution: R{rules.contribution}
            </Text>
            {renderPayoutRule()}
            <Text style={styles.rules}>Interval: {rules.interval}</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    );
  };

  return (
    <View style={styles.HomeContainer}>
      <FlatList
        data={stockvels}
        renderItem={renderStockvel}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#000000c0',
    margin: 5,
    borderRadius: 15,
    padding: 20,
  },
  image: {
    margin: 5,
    flex: 1,
    borderRadius: 15,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    color: 'white',
    marginBottom: 10,
    paddingRight: 10,
  },
  rulesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rules: {
    color: 'white',
    fontSize: 12,
    fontStyle: 'italic',
  },
  HomeContainer: {
    marginTop: 10,
    flex: 20,
  },
});

export default StockvelList;
