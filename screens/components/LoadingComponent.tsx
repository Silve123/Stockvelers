import React, {useEffect, useRef} from 'react';
import {View, Animated, Easing, Image, Text, StyleSheet} from 'react-native';

const LoadingComponent = () => {
  const rotateValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        // Start at position A, no rotation, scale at 1
        Animated.timing(rotateValue, {
          toValue: 0,
          duration: 0,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 0,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        // Rotate clockwise
        Animated.timing(rotateValue, {
          toValue: 1,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        // Resize to position B (larger size)
        Animated.timing(scaleValue, {
          toValue: 1.2,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        // Rotate counterclockwise
        Animated.timing(rotateValue, {
          toValue: 0,
          duration: 1000,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        // Resize back to position A (original size)
        Animated.timing(scaleValue, {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
      {iterations: -1}, // Run the animation indefinitely
    ).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const spin = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.loadingContainer}>
        <Animated.Image
          source={require('./logo.png')}
          style={[
            styles.image,
            {
              transform: [{rotate: spin}, {scale: scaleValue}],
            },
          ]}
          resizeMode="contain"
        />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9998,
  },
  loadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
  loadingText: {
    fontSize: 20,
    margin: 10,
    color: 'black',
  },
});

export default LoadingComponent;
