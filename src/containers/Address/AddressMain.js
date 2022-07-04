import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import color from '../../common/color';
import Header from '../../components/Header';

const AddressMain = () => {
  return (
    <>
      <Header title="My Address" />
      <ScrollView style={{marginBottom: 60, backgroundColor: color.white}}>
        <View>
          <View style={styles.headerView}>
            <Image
              style={styles.icons}
              source={require('../../assets/images/plus-green.png')}
            />
            <Text style={styles.headerText}>add a new address</Text>
          </View>
          <View
            style={[
              styles.row,
              {borderBottomWidth: 1, borderBottomColor: '#E2E2E2'},
            ]}>
            <View style={{width:'70%'}}>
              <Text
                style={[
                  styles.addressText,
                  {fontSize: 18, color: color.black},
                ]}>
                home
              </Text>
              <Text style={styles.addressText}>Piyush Rastogi</Text>
              <Text style={styles.addressText}>
                645b 30, Jankipuram extension Lucknow
              </Text>
            </View>
            <View style={[styles.row, {width: '30%'}]}>
              <Text
                style={[
                  styles.addressText,
                  {fontSize: 14, color: color.black, paddingRight: 10},
                ]}>
                Edit
              </Text>
              <View
                style={{
                  borderRightWidth: 1,
                  height: 25,
                }}></View>
              <Text
                style={[
                  styles.addressText,
                  {fontSize: 14, color: color.primary, paddingLeft: 10},
                ]}>
                Delete
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.row,
              {borderBottomWidth: 1, borderBottomColor: '#E2E2E2'},
            ]}>
            <View style={{width: '70%'}}>
              <Text
                style={[
                  styles.addressText,
                  {fontSize: 18, color: color.black},
                ]}>
                home
              </Text>
              <Text style={styles.addressText}>Piyush Rastogi</Text>
              <Text style={styles.addressText}>
                645b 30, Jankipuram extension Lucknow
              </Text>
            </View>
            <View style={[styles.row, {width: '30%'}]}>
              <Text
                style={[
                  styles.addressText,
                  {fontSize: 14, color: color.black, paddingRight: 10},
                ]}>
                Edit
              </Text>
              <View
                style={{
                  borderRightWidth: 1,
                  height: 25,
                }}></View>
              <Text
                style={[
                  styles.addressText,
                  {fontSize: 14, color: color.primary, paddingLeft: 10},
                ]}>
                Delete
              </Text>
            </View>
          </View>
          <View
            style={[
              styles.row,
              {borderBottomWidth: 1, borderBottomColor: '#E2E2E2'},
            ]}>
            <View style={{width: '70%'}}>
              <Text
                style={[
                  styles.addressText,
                  {fontSize: 18, color: color.black},
                ]}>
                home
              </Text>
              <Text style={styles.addressText}>Piyush Rastogi</Text>
              <Text style={styles.addressText}>
                645b 30, Jankipuram extension Lucknow
              </Text>
            </View>
            <View style={[styles.row, {width: '30%'}]}>
              <Text
                style={[
                  styles.addressText,
                  {fontSize: 14, color: color.black, paddingRight: 10},
                ]}>
                Edit
              </Text>
              <View
                style={{
                  borderRightWidth: 1,
                  height: 25,
                }}></View>
              <Text
                style={[
                  styles.addressText,
                  {fontSize: 14, color: color.primary, paddingLeft: 10},
                ]}>
                Delete
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default AddressMain;
const styles = StyleSheet.create({
  headerView: {
    backgroundColor: '#F2F3F2',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 20,
  },
  headerText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 19,
    textAlign: 'left',
    color: color.black,
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
  addressText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 21,
    textAlign: 'left',
    fontSize: 18,
    padding: 2,
  },
});
