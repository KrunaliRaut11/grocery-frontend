import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '../../common/color';
import Button from '../../components/Button';
import Header from '../../components/Header';

const Details = () => {
  return (
    <>
      <Header title="Order Deails" />
      <ScrollView style={{marginBottom: 60}}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>placed on sat, 30 oct, 7:21 pm</Text>
        </View>
        <View style={styles.statusContainer}>
          <Image
            style={styles.icons}
            source={require('../../assets/images/tickWG.png')}
          />
          <Text style={styles.statusText}>
            yay! order successfully delivered
          </Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.timeText}>delivered on</Text>
          <Text style={[styles.timeText, {color: color.black, marginTop: 5}]}>
            wed, 3 nov 6:02 pm
          </Text>
        </View>
        <View style={styles.paymentMode}>
          <Image
            style={styles.icons}
            source={require('../../assets/images/payment-method.png')}
          />
          <Text style={styles.paymentModeText}>paid online</Text>
        </View>
        <View style={styles.orderDetails}>
          <Text style={styles.orderText}>14 items</Text>
          <Text style={styles.orderText}> • </Text>
          <Text style={styles.orderText}>order id : ORD719129920</Text>
          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btnText}>reorder</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 14}}>
          <View
            style={[
              styles.orders,
              {
                borderBottomWidth: 1,
                borderBottomColor: '#E2E2E2',
              },
            ]}>
            <Image
              style={styles.icons}
              source={require('../../assets/images/red-pepper-chili.png')}
            />
            <View>
              <Text style={styles.ordersName}>Bell Pepper Red</Text>
              <Text style={styles.ordersDetailsText}>1kg, Price</Text>
              <Text style={styles.ordersDetailsText}>1x10 units</Text>
              <View style={styles.row}>
                <Text
                  style={[
                    styles.ordersDetailsText,
                    {textDecorationLine: 'line-through', paddingRight: 5},
                  ]}>
                  $5.55
                </Text>
                <Text style={styles.ordersDetailsText}>$5.55</Text>
              </View>
            </View>
            <Text style={[styles.ordersName, {marginLeft: '10%'}]}>$5.55</Text>
          </View>
          <View style={styles.orders}>
            <Image
              style={styles.icons}
              source={require('../../assets/images/red-pepper-chili.png')}
            />
            <View>
              <Text style={styles.ordersName}>Bell Pepper Red</Text>
              <Text style={styles.ordersDetailsText}>1kg, Price</Text>
              <Text style={styles.ordersDetailsText}>1x10 units</Text>
              <View style={styles.row}>
                <Text
                  style={[
                    styles.ordersDetailsText,
                    {textDecorationLine: 'line-through', paddingRight: 5},
                  ]}>
                  $5.55
                </Text>
                <Text style={styles.ordersDetailsText}>$5.55</Text>
              </View>
            </View>
            <Text style={[styles.ordersName, {marginLeft: '10%'}]}>$5.55</Text>
          </View>
        </View>
        <View>
          <View style={styles.orderDetails}>
            <Text style={styles.orderSummary}>payment summary</Text>
          </View>
          <View
            style={[
              styles.row,
              {
                justifyContent: 'space-between',
                padding: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#E2E2E2',
                backgroundColor: color.white,
              },
            ]}>
            <View>
              <Text style={styles.amountText}>MRP</Text>
              <Text style={styles.amountText}>product discount</Text>
              <Text style={styles.amountText}>Promo Code Discount</Text>
              <Text style={[styles.amountText, {paddingBottom: 10}]}>
                delivery charges
              </Text>
            </View>
            <View>
              <Text style={styles.amountText}>$500</Text>
              <Text style={styles.amountText}>$0</Text>
              <Text style={[styles.amountText, {color: color.primary}]}>
                $0
              </Text>
              <Text style={[styles.amountText, {color: color.primary}]}>
                Free
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.row,
              {
                justifyContent: 'space-between',
                padding: 20,
                backgroundColor: color.white,
              },
            ]}>
            <Text style={styles.finalAmount}>final paid amount</Text>
            <Text style={styles.finalAmount}>$500</Text>
          </View>
        </View>

        <View
          style={[
            styles.row,
            {
              justifyContent: 'space-between',
              backgroundColor: '#E2E2E2',
              padding: 20,
            },
          ]}>
          <Text style={[styles.orderSummary, {color: color.primary}]}>
            your total savings
          </Text>
          <Text style={styles.finalAmount}>$0</Text>
        </View>
        <View
          style={[
            styles.row,
            {padding: 20, backgroundColor: color.white, marginBottom: 10},
          ]}>
          <Image
            style={styles.icons}
            source={require('../../assets/images/address.png')}
          />
          <View>
            <Text style={styles.addressText}>delivery address</Text>
            <Text
              style={[
                styles.addressText,
                {color: color.black, paddingVertical: 5},
              ]}>
              home
            </Text>
            <Text style={styles.addressText}>Piyush Rastogi</Text>
            <Text style={styles.addressText}>
              645b 30, Jankipuram extension Lucknow
            </Text>
          </View>
        </View>
        <View style={styles.mainBtn}>
          <Image
            style={styles.icons}
            source={require('../../assets/images/customer-support.png')}
          />
          <Text style={styles.textBtn}>customer support</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default Details;
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
  statusContainer: {
    backgroundColor: color.primary,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    marginRight: 20,
  },
  statusText: {
    color: color.white,
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.2800000011920929,
    textAlign: 'center',
  },
  timeContainer: {
    backgroundColor: color.white,
    padding: 20,
  },
  timeText: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.2800000011920929,
    textAlign: 'left',
  },
  paymentMode: {
    backgroundColor: color.white,
    marginVertical: 14,
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
  },
  paymentModeText: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.2800000011920929,
    color: color.black,
  },
  orderDetails: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F2F3F2',
    padding: 12,
    alignItems: 'center',
  },
  orderText: {
    color: '#7C7C7C',
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.2800000011920929,
  },
  btnContainer: {
    backgroundColor: color.primary,
    padding: 3,
    marginLeft: 40,
  },
  btnText: {
    color: color.white,
  },
  orders: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-around',
    backgroundColor: color.white,
    padding: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  ordersName: {
    fontFamily: 'Alata',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0.10000000149011612,
    textAlign: 'left',
    color: color.black,
  },
  ordersDetailsText: {
    fontFamily: 'Alata',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'left',
  },
  orderSummary: {
    color: '#7C7C7C',
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.2800000011920929,
    textAlign: 'center',
  },
  amountText: {
    fontFamily: 'Alata',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 25,
    paddingVertical: 2,
  },
  finalAmount: {
    fontFamily: 'Alata',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 25,
    textAlign: 'left',
    color: color.black,
  },
  addressText: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
    textAlign: 'left',
  },
  mainBtn: {
    backgroundColor: color.primary,
    display: 'flex',
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  textBtn: {
    color: color.white,
    fontFamily: 'Alata',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
    textAlign: 'center',
  },
});
