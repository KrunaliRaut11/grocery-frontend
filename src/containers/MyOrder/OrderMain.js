import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import color from '../../common/color';
import Button from '../../components/Button';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';

const OrderMain = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header title="My Orders" />
      <ScrollView
        style={{marginBottom: 100, backgroundColor: color.white, flex: 1}}>
        <View>
          <View style={styles.headerView}>
            <Text style={styles.headerText}>
              placed on sat, 30 oct, 7:21 pm
            </Text>
          </View>
          <View style={{backgroundColor: color.white}}>
            <View style={styles.row}>
              <View>
                <Text style={[styles.orderText, {fontSize: 20}]}>14 items</Text>
                <Text style={styles.orderText}>
                  schedule for wed, 3 nov, 4 pm - 7 pm
                </Text>
                <Text style={styles.orderText}>order id : ORD719129920</Text>
                <View style={styles.iconRow}>
                  <Image
                    style={styles.icons}
                    source={require('../../assets/images/tickGW.png')}
                  />
                  <Text style={styles.orderText}>delivered</Text>
                </View>
              </View>
              <Text style={[styles.orderText, {fontSize: 20}]}>$1000</Text>
            </View>
            <Button
              title="view details"
              onPress={() => navigation.navigate('OrderDetails')}
            />
          </View>
        </View>
        <View>
          <View style={styles.headerView}>
            <Text style={styles.headerText}>
              placed on sat, 30 oct, 7:21 pm
            </Text>
          </View>
          <View style={styles.row}>
            <View>
              <Text style={[styles.orderText, {fontSize: 20}]}>14 items</Text>
              <Text style={styles.orderText}>
                schedule for wed, 3 nov, 4 pm - 7 pm
              </Text>
              <Text style={styles.orderText}>order id : ORD719129920</Text>
              <View style={styles.iconRow}>
                <Image
                  style={styles.icons}
                  source={require('../../assets/images/tickGW.png')}
                />
                <Text style={styles.orderText}>delivered</Text>
              </View>
            </View>
            <Text style={[styles.orderText, {fontSize: 20}]}>$1000</Text>
          </View>
          <Button title="view details" />
        </View>
        <View>
          <View style={styles.headerView}>
            <Text style={styles.headerText}>
              placed on sat, 30 oct, 7:21 pm
            </Text>
          </View>
          <View style={styles.row}>
            <View>
              <Text style={[styles.orderText, {fontSize: 20}]}>14 items</Text>
              <Text style={styles.orderText}>
                schedule for wed, 3 nov, 4 pm - 7 pm
              </Text>
              <Text style={styles.orderText}>order id : ORD719129920</Text>
              <View style={styles.iconRow}>
                <Image
                  style={styles.icons}
                  source={require('../../assets/images/tickGW.png')}
                />
                <Text style={styles.orderText}>delivered</Text>
              </View>
            </View>
            <Text style={[styles.orderText, {fontSize: 20}]}>$1000</Text>
          </View>
          <Button title="view details" />
        </View>
        <View>
          <View style={styles.headerView}>
            <Text style={styles.headerText}>
              placed on sat, 30 oct, 7:21 pm
            </Text>
          </View>
          <View style={styles.row}>
            <View>
              <Text style={[styles.orderText, {fontSize: 20}]}>14 items</Text>
              <Text style={styles.orderText}>
                schedule for wed, 3 nov, 4 pm - 7 pm
              </Text>
              <Text style={styles.orderText}>order id : ORD719129920</Text>
              <View style={styles.iconRow}>
                <Image
                  style={styles.icons}
                  source={require('../../assets/images/tickGW.png')}
                />
                <Text style={styles.orderText}>delivered</Text>
              </View>
            </View>
            <Text style={[styles.orderText, {fontSize: 20}]}>$1000</Text>
          </View>
          <Button title="view details" />
        </View>
        <View>
          <View style={styles.headerView}>
            <Text style={styles.headerText}>
              placed on sat, 30 oct, 7:21 pm
            </Text>
          </View>
          <View style={styles.row}>
            <View>
              <Text style={[styles.orderText, {fontSize: 20}]}>14 items</Text>
              <Text style={styles.orderText}>
                schedule for wed, 3 nov, 4 pm - 7 pm
              </Text>
              <Text style={styles.orderText}>order id : ORD719129920</Text>
              <View style={styles.iconRow}>
                <Image
                  style={styles.icons}
                  source={require('../../assets/images/tickGW.png')}
                />
                <Text style={styles.orderText}>delivered</Text>
              </View>
            </View>
            <Text style={[styles.orderText, {fontSize: 20}]}>$1000</Text>
          </View>
          <Button
            title="view details"
            onPress={() => navigation.navigate('Help')}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default OrderMain;
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
  icons: {
    marginRight: 10,
  },
  iconRow: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 14,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: color.white,
  },
  orderText: {
    fontFamily: 'Montserrat',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.2800000011920929,
    color: color.black,
    paddingVertical: 3,
  },
});
