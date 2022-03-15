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
import {useNavigation} from '@react-navigation/native';

const AccountMain = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView style={{marginBottom: 60, backgroundColor: color.white}}>
        <View
          style={[
            styles.container,
            {padding: 20, borderBottomWidth: 1, borderBottomColor: '#E2E2E2'},
          ]}>
          <Image
            style={styles.profile}
            source={require('../../assets/images/profile.png')}
          />
          <View style={{marginLeft: 10}}>
            <View style={styles.container}>
              <Text style={[styles.username, {fontSize: 20}]}>
                Swifsys Tech
              </Text>
              <Image
                style={styles.pencile}
                source={require('../../assets/images/pencile.png')}
              />
            </View>
            <Text>swifsystechnologies@gmail.com</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('MyOrder')}
            style={styles.pageContainer}>
            <View style={styles.container}>
              <Image
                style={styles.icons}
                source={require('../../assets/images/orders.png')}
              />
              <Text style={[styles.username, {fontSize: 18}]}>My Orders</Text>
            </View>
            <Image
              style={styles.icons}
              source={require('../../assets/images/back-arrow.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('MyDetails')}
            style={styles.pageContainer}>
            <View style={styles.container}>
              <Image
                style={styles.icons}
                source={require('../../assets/images/details.png')}
              />
              <Text style={[styles.username, {fontSize: 18}]}>My Details</Text>
            </View>
            <Image
              style={styles.icons}
              source={require('../../assets/images/back-arrow.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Address')}
            style={styles.pageContainer}>
            <View style={styles.container}>
              <Image
                style={styles.icons}
                source={require('../../assets/images/address.png')}
              />
              <Text style={[styles.username, {fontSize: 18}]}>My Address</Text>
            </View>
            <Image
              style={styles.icons}
              source={require('../../assets/images/back-arrow.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ReferEarn')}
            style={styles.pageContainer}>
            <View style={styles.container}>
              <Image
                style={styles.icons}
                source={require('../../assets/images/share-earn.png')}
              />
              <Text style={[styles.username, {fontSize: 18}]}>
                Share and Earn
              </Text>
            </View>
            <Image
              style={styles.icons}
              source={require('../../assets/images/back-arrow.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.pageContainer}>
            <View style={styles.container}>
              <Image
                style={styles.icons}
                source={require('../../assets/images/promo-cord.png')}
              />
              <Text style={[styles.username, {fontSize: 18}]}>Promo Code</Text>
            </View>
            <Image
              style={styles.icons}
              source={require('../../assets/images/back-arrow.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.pageContainer}>
            <View style={styles.container}>
              <Image
                style={styles.icons}
                source={require('../../assets/images/bell.png')}
              />
              <Text style={[styles.username, {fontSize: 18}]}>
                Notifications{' '}
              </Text>
            </View>
            <Image
              style={styles.icons}
              source={require('../../assets/images/back-arrow.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Help')}
            style={styles.pageContainer}>
            <View style={styles.container}>
              <Image
                style={styles.icons}
                source={require('../../assets/images/help.png')}
              />
              <Text style={[styles.username, {fontSize: 18}]}>Help</Text>
            </View>
            <Image
              style={styles.icons}
              source={require('../../assets/images/back-arrow.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.pageContainer}>
            <View style={styles.container}>
              <Image
                style={styles.icons}
                source={require('../../assets/images/about.png')}
              />
              <Text style={[styles.username, {fontSize: 18}]}>About </Text>
            </View>
            <Image
              style={styles.icons}
              source={require('../../assets/images/back-arrow.png')}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btnBox}>
            <View style={styles.box}>
              <Image
                style={styles.googleIcon}
                source={require('../../assets/images/exit.png')}
              />
              <Text style={styles.btntext}>LogOut</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default AccountMain;
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profile: {
    marginRight: 10,
  },
  pencile: {
    marginLeft: 30,
  },
  username: {
    fontFamily: 'Alata',
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'left',
    color: color.black,
  },
  pageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    alignItems: 'center',
  },
  icons: {
    marginRight: 20,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
  },
  btnBox: {
    backgroundColor: '#F2F3F2',
    // alignItems: 'center',
    padding: 20,
    marginHorizontal: 16,
    borderRadius: 10,
    marginVertical: 40,
  },
  btntext: {
    color: color.primary,
    fontFamily: 'Alata',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    textAlign: 'center',
    fontSize: 18,
    marginTop: 5,
  },
  googleIcon: {
    marginRight: 50,
    marginLeft: 20,
  },
});
