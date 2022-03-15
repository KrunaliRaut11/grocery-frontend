import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import color from '../../common/color';

const SplashMain = () => {
  return (
    <>
      <View style={{backgroundColor: color.primary}}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
          <View>
            <Text style={styles.heading}>Swifsys</Text>
            <Text style={styles.subText}>Online Grocery</Text>
          </View>
        </View>
        <Text style={styles.weblink}>swifsys.com</Text>
      </View>
    </>
  );
};

export default SplashMain;
const styles = StyleSheet.create({
  container: {
    height: 750,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    alignItems: 'center',
    marginRight: 10,
    marginTop:10,
  },
  heading: {
    fontFamily: 'Roboto',
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: '400',
    // lineHeight: 18,
    letterSpacing: 5.5,
    textAlign: 'center',
    color: color.white,
  },
  subText: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 5.5,
    textAlign: 'center',
    color: color.white,
  },
  weblink: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 5.5,
    textAlign: 'center',
    color: color.white,
    // bottom: 0,
    paddingBottom: 40,
  },
});
