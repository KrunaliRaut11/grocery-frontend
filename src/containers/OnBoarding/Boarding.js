import React from 'react';
import {ImageBackground, StyleSheet, Text, View, Image} from 'react-native';
import color from '../../common/color';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
const Boarding = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/onBoarding.png')}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.bgContainer}>
            <Image
              style={styles.logo}
              source={require('../../assets/images/logo.png')}
            />
            <Text style={styles.heading}>Welcome to our store</Text>
            <Text style={styles.subtext}>
              Get your groceries in as fast as one hour
            </Text>
            <Button title="Get Started" onPress={() => navigation.navigate('SignIn')}/>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default Boarding;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingBottom:40
  },
  heading: {
    fontFamily: 'Alata',
    fontSize: 48,
    fontStyle: 'normal',
    fontWeight: '400',
    // lineHeight: 29,
    letterSpacing: 0,
    textAlign: 'center',
    color: color.white,
    paddingBottom:20,
    paddingHorizontal:40
  },
  subtext: {
    fontFamily: 'Alata',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: 'center',
    color: color.white,
    paddingBottom: 30,
  },
  bgContainer: {
    backgroundColor: 'hsla(0, 0%, 0%, 0.4)',
    bottom: 0,
    paddingTop: 40,
    paddingBottom: 50,
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
  },
});
