import React from 'react';
import {Image, ImageBackground, StyleSheet, Text} from 'react-native';
import color from '../../common/color';
import Button from '../../components/Button';

const Order = () => {
  return (
    <>
      <ImageBackground
        source={require('../../assets/images/bg.png')}
        resizeMode="cover"
        style={styles.image}>
        <Image
          source={require('../../assets/images/order.png')}
          style={styles.image}
        />
      </ImageBackground>
      <Text style={styles.heading}>Your Order has been accepted</Text>
      <Text style={styles.text}>
        Your items has been placcd and is on it’s way to being processed
      </Text>
      <Button title="Track Order" />
      <Text style={styles.backText}>Back to home</Text>
    </>
  );
};

export default Order;
const styles = StyleSheet.create({
  container: {
    // width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  image: {
    alignItems: 'center',
    paddingTop: '30%',
  },
  heading: {
    fontFamily: 'Alata',
    fontSize: 28,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 39,
    textAlign: 'center',
    color: color.black,
    paddingHorizontal: 40,
    paddingTop: 10,

  },
  text: {
    fontFamily: 'Alata',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
    textAlign: 'center',
    paddingHorizontal: 40,
    paddingTop: 10,
    paddingBottom: '30%',
  },
  backText: {
    fontFamily: 'Alata',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'center',
    color: color.black,
    paddingTop: 30,
  },
});
