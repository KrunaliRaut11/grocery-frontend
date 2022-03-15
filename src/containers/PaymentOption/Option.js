import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import color from '../../common/color';
import Header from '../../components/Header';

const Option = () => {
  return (
    <>
      <Header title="Payment Option" />
      <View style={styles.amountContainer}>
        <View style={styles.amountRow}>
          <Text style={styles.amountHeading}>Amount Payable</Text>
          <Text style={styles.amountText}>(Incl. of all taxes)</Text>
        </View>
        <Text style={styles.amount}>$500</Text>
      </View>
      <View
        style={[
          styles.amountRow,
          {backgroundColor: color.white, marginVertical: 10, padding: 10},
        ]}>
        <Image
          source={require('../../assets/images/percentage.png')}
          style={styles.icons}
        />
        <Text style={[styles.amountHeading, {color: color.primary}]}>
          Promo code & Bank offers
        </Text>
      </View>
    </>
  );
};

export default Option;
const styles = StyleSheet.create({
  amountContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: color.white,
    borderTopWidth: 1,
    borderTopColor: '#E2E2E2',
  },
  amountRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  amountHeading: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 19,
    textAlign: 'left',
    color: color.black,
  },
  amountText: {
    fontFamily: 'Alata',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'left',
    marginLeft: 10,
  },
  amount: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
    textAlign: 'left',
    color: color.black,
  },
  icons: {
    marginHorizontal: 10,
  },
});
