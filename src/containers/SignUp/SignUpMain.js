import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import color from '../../common/color';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const SignUpMain = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require('../../assets/images/bgFull.png')}
          resizeMode="cover"
          style={styles.image}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/green-logo.png')}
          />
          <View style={{marginHorizontal: 20}}>
            <Text style={styles.heading}>Sign Up</Text>
            <Text style={styles.subText}>
              Enter your credentials to continue
            </Text>
            <Text style={styles.subText}>Username</Text>
            <TextInput
              style={[styles.inputText, {borderBottomWidth: 1}]}
              autoFocus={true}
            />
            <Text style={styles.subText}>Email</Text>

            <View style={styles.row}>
              <TextInput style={styles.inputText} autoFocus={true} />
              <Image
                style={{marginTop: 10}}
                source={require('../../assets/images/tick.png')}
              />
            </View>
            <Text style={styles.subText}>Password</Text>
            <View style={styles.row}>
              <TextInput style={styles.inputText} autoFocus={true} />
              <Image
                style={{marginTop: 10}}
                source={require('../../assets/images/close-eye.png')}
              />
            </View>
            <Text style={styles.condition}>
              By continuing you agree to our
              <Text style={{color: color.primary}}> Terms of Service </Text>and
              <Text style={{color: color.primary}}> Privacy Policy</Text>.
            </Text>
            <Button
              title="Sing Up"
              onPress={() => navigation.navigate('HomeTabs')}
            />
            <Text style={styles.login}>
              Already have an account?{' '}
              <Text style={[styles.login, {color: color.primary}]}>Login</Text>
            </Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

export default SignUpMain;
const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    // flex: 1,
  },
  image: {
    justifyContent: 'center',
  },
  logo: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginVertical: 90,
  },
  heading: {
    fontFamily: 'Alata',
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 29,
    letterSpacing: 0,
    textAlign: 'left',
    color: color.black,
    marginVertical: 5,
  },
  subText: {
    fontFamily: 'Alata',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'left',
    marginTop: 10,
  },
  inputText: {
    fontFamily: 'Alata',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'left',
    color: color.black,
  },
  condition: {
    fontFamily: 'Alata',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 15,
    letterSpacing: 0.05,
    textAlign: 'left',
    marginVertical: 20,
  },
  login: {
    fontFamily: 'Alata',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 15,
    letterSpacing: 0.05,
    textAlign: 'center',
    color: color.black,
    paddingVertical: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
  },
});
