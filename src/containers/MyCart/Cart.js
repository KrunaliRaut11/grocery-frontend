import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '../../common/color';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';

const Cart = () => {
  const navigation = useNavigation();

  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }
  return (
    <>
      <Header title="My Cart" />
    
      <ScrollView style={{marginBottom: 60,}}>
        <View style={styles.addressContainer}>
          <View>
            <Text style={styles.addressHeading}>delivery address</Text>
            <Text style={styles.addressText}>
              645b 301 Vashisthpuram, Jankipuram Ex...
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('MyAddress')}
            style={styles.addressBtn}>
            <Text style={styles.addressBtnText}>change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.timeContainer}>
          <View>
            <Text style={styles.addressHeading}>tomorrow, 9am - 1pm</Text>
            <Text style={styles.addressText}>from Super Store - Lucknow</Text>
          </View>
          <View style={styles.timeBtn}>
            <Text style={styles.timeBtnText}>more slots</Text>
          </View>
        </View>
        <View style={{marginBottom: 10, backgroundColor: color.white}}>
          <View
            style={[
              styles.productContainer,
              {borderBottomWidth: 1, borderBottomColor: '#E2E2E2'},
            ]}>
            <Image
              source={require('../../assets/images/red-pepper-chili.png')}
              style={styles.productImage}
            />
            <View>
              <Text style={styles.productName}>Bell Pepper Red</Text>
              <Text style={styles.productQuantity}>1kg, Price</Text>
              <View style={styles.increRow}>
                <TouchableOpacity
                  onPress={decrementCounter}
                  style={styles.incrementContainer}>
                  <Image
                    style={styles.incrementIcons}
                    source={require('../../assets/images/remove.png')}
                  />
                </TouchableOpacity>

                <View>
                  <Text style={styles.incrementText}>{counter}</Text>
                </View>
                <TouchableOpacity
                  onPress={incrementCounter}
                  style={styles.incrementContainer}>
                  <Image
                    style={styles.incrementIcons}
                    source={require('../../assets/images/add.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Image
                source={require('../../assets/images/cross.png')}
                style={styles.iconsCross}
              />
              <Text style={styles.productPrice}>$5.55</Text>
            </View>
          </View>
          <View style={styles.productContainer}>
            <Image
              source={require('../../assets/images/egg.png')}
              style={styles.productImage}
            />
            <View>
              <Text style={styles.productName}>Egg Chicken</Text>
              <Text style={styles.productQuantity}>4pcs, Price</Text>
              <View style={styles.increRow}>
                <TouchableOpacity
                  onPress={decrementCounter}
                  style={styles.incrementContainer}>
                  <Image
                    style={styles.incrementIcons}
                    source={require('../../assets/images/remove.png')}
                  />
                </TouchableOpacity>

                <View>
                  <Text style={styles.incrementText}>{counter}</Text>
                </View>
                <TouchableOpacity
                  onPress={incrementCounter}
                  style={styles.incrementContainer}>
                  <Image
                    style={styles.incrementIcons}
                    source={require('../../assets/images/add.png')}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Image
                source={require('../../assets/images/cross.png')}
                style={styles.iconsCross}
              />
              <Text style={styles.productPrice}>$5.55</Text>
            </View>
          </View>
        </View>
        <View style={styles.billContainer}>
          <Text style={styles.billHeading}>bill details</Text>
          <View style={styles.billDetails}>
            <View>
              <Text style={styles.billText}>MRP</Text>
              <Text style={styles.billText}>product discount</Text>
              <View>
                <Text style={styles.billText}>delivery charges</Text>
              </View>
              <Text style={styles.billTotal}>bill total</Text>
            </View>
            <View>
              <Text style={styles.billText}>$500</Text>
              <Text style={styles.billText}>$0</Text>
              <Text style={[styles.billText, {color: color.primary}]}>
                FREE
              </Text>
              <Text style={styles.billTotal}>$500</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('PaymentOption')}
          style={styles.btnContainer}>
          <View style={styles.btnRow}>
            <Image
              source={require('../../assets/images/cart.png')}
              style={styles.btnIcons}
            />
            <View>
              <Text style={styles.btnText}>2 items</Text>
              <View style={styles.btnRow}>
                <Text style={styles.btnText}>$500</Text>
                <Text
                  style={[
                    styles.btnText,
                    {paddingLeft: 5, textDecorationLine: 'line-through'},
                  ]}>
                  $500
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.btnRow}>
            <Text style={styles.btnText}>proceed to pay</Text>
            <Image
              source={require('../../assets/images/white-arrow.png')}
              style={styles.btnIcons}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

export default Cart;
const styles = StyleSheet.create({
  addressContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingBottom: 10,
    backgroundColor: color.white,
  },
  addressHeading: {
    fontFamily: 'Alata',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    color: color.black,
  },
  addressText: {
    fontFamily: 'Alata',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'left',
    color: color.textColor,
  },
  addressBtn: {
    backgroundColor: color.primary,
    paddingHorizontal: 10,
    padding: 5,
    borderRadius: 2,
    marginVertical: 20,
  },
  addressBtnText: {
    fontFamily: 'Alata',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'left',
    color: color.white,
  },
  timeContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingBottom: 10,
    backgroundColor: color.white,
  },
  timeBtn: {
    borderWidth: 1,
    borderColor: color.primary,
    paddingHorizontal: 10,
    padding: 5,
    borderRadius: 2,
    marginVertical: 20,
  },
  timeBtnText: {
    fontFamily: 'Alata',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'left',
    color: color.primary,
  },
  productContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  productName: {
    fontFamily: 'Alata',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0.10000000149011612,
    textAlign: 'left',
    color: color.black,
  },
  productQuantity: {
    fontFamily: 'Alata',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'left',
  },
  productPrice: {
    fontFamily: 'Alata',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 27,
    letterSpacing: 0.10000000149011612,
    textAlign: 'left',
    color: color.black,
    marginTop: 40,
  },
  increRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  incrementIcons: {
    margin: 5,
  },
  incrementContainer: {
    width: 45.67,
    height: 45.67,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#E2E2E2',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconsCross: {
    marginLeft: 30,
  },
  billContainer: {
    backgroundColor: color.white,
  },
  billDetails: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom:20
  },
  billHeading: {
    fontFamily: 'Alata',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 28,
    color: color.black,
    paddingLeft: 20,
    paddingTop: 20,
  },
  billText: {
    fontFamily: 'Alata',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    paddingVertical:2
  },
  billTotal: {
    fontFamily: 'Alata',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 25,
    color: color.black,
  },
  btnContainer: {
    backgroundColor: color.primary,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 8,
    margin: 20,
  },
  btnIcons: {
    margin: 10,
  },
  btnRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    fontFamily: 'Alata',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    color: color.white,
  },
});
