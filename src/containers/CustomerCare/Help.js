import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import color from '../../common/color';
import Header from '../../components/Header';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Help = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header title="Help" />
      <View style={styles.headerView}>
        <Text style={styles.headerText}>placed on sat, 30 oct, 7:21 pm</Text>
      </View>
      <View style={styles.scheduleView}>
        <Text style={styles.scheduleText}>
          schedule for
          <Text style={[styles.scheduleText, {color: color.black}]}>
            {' '}
            wed, 3 nov, 4 pm - 7 pm
          </Text>
        </Text>
      </View>
      <View style={styles.productDetails}>
        <View style={styles.productView}>
          <View>
            <Text style={styles.productName}>Super Store - Lucknow</Text>
            <Text style={styles.charges}>Delivery charges</Text>
            <Text style={styles.orderId}>order id : ORD719129920</Text>
            <View style={styles.row}>
              <Image
                style={styles.icons}
                source={require('../../assets/images/tickGW.png')}
              />
              <Text style={styles.status}>delivered</Text>
            </View>
          </View>
          <View>
            <Text style={styles.amount}>$1000</Text>
            <Text style={styles.deliveryChar}>Free</Text>
          </View>
        </View>
        <View style={styles.amountView}>
          <View>
            <Text style={styles.orignalAmountText}>Original amount</Text>
            <Text style={styles.finalAmountText}>Final paid amount</Text>
          </View>
          <View>
            <Text style={styles.orignalAmount}>$1000</Text>
            <Text style={styles.finalAmount}>$1000</Text>
          </View>
        </View>
        <Button
          title="I have an issue with this order"
          onPress={() => navigation.navigate('OrderDetails')}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('MyOrder')}
        style={styles.otherOrderView}>
        <Text style={styles.otherOrderText}>
          I have an issue with another order
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.otherOrderView}>
        <Text style={styles.otherOrderText}>Have a general query? Call us</Text>
      </TouchableOpacity>
    </>
  );
};

export default Help;
const styles = StyleSheet.create({
  headerView: {
    justifyContent: 'center',
    backgroundColor: '#F2F3F2',
    alignItems: 'center',
    padding: 7,
  },
  headerText: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.2800000011920929,
    textAlign: 'center',
  },
  scheduleView: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    backgroundColor: color.white,
  },
  scheduleText: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.2800000011920929,
    textAlign: 'center',
  },
  productDetails: {
    padding: 20,
    backgroundColor: color.white,
    marginBottom: 10,
  },
  icons: {
    marginRight: 10,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 14,
  },
  productView: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    justifyContent: 'space-between',
  },
  productName: {
    fontFamily: 'Alata',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: 'left',
  },
  charges: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.2800000011920929,
    textAlign: 'left',
    paddingVertical: 7,
  },
  orderId: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.2800000011920929,
    textAlign: 'center',
  },
  amount: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 25,
    letterSpacing: -0.2800000011920929,
    textAlign: 'center',
    color: color.black,
  },
  deliveryChar: {
    fontFamily: 'Alata',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'center',
    color: color.primary,
    paddingVertical: 7,
  },
  status: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.2800000011920929,
    textAlign: 'center',
  },
  amountView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  orignalAmountText: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.2800000011920929,
    textAlign: 'left',
  },
  finalAmountText: {
    fontFamily: 'Alata',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'left',
    paddingTop: 5,
  },
  orignalAmount: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22,
    textAlign: 'center',
  },
  finalAmount: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22,
    textAlign: 'center',
    paddingTop: 5,
    color: color.black,
  },
  otherOrderView: {
    backgroundColor: color.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 14,
    marginBottom: 10,
  },
  otherOrderText: {
    fontFamily: 'Alata',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
    textAlign: 'left',
    color: color.primary,
  },
});
