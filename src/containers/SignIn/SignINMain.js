import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '../../common/color';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';

const SignINMain = () => {
  const navigation = useNavigation();

  return (
    <>
      <Image
        style={styles.logo}
        source={require('../../assets/images/login-bg.png')}
      />
      <Text style={styles.heading}>
        Get your Groceries with Swifsys grocery
      </Text>
      <View style={styles.inputContainer}>
        <View style={styles.box}>
          <Image
            style={styles.icon}
            source={require('../../assets/images/ind.png')}
          />
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              marginTop: 3,
              marginHorizontal: 10,
              color: color.black,
            }}>
            +91
          </Text>
        </View>
        <TextInput
          style={styles.inputBox}
          autoFocus={true}
          placeholder="Mobile Number"
        />
      </View>
      {/* <TouchableOpacity style={styles.btnBox} onPress={() => navigation.navigate('NumberScreen')}>
        <View style={styles.box}>
          <Image
            style={styles.googleIcon}
            source={require('../../assets/images/google.png')}
          />
          <Text style={styles.btntext}>Continue with Google</Text>
        </View>
      </TouchableOpacity> */}
      <Button title="Login / SignUp" onPress={() => navigation.navigate('NumberScreen')}/>
    </>
  );
};

export default SignINMain;
const styles = StyleSheet.create({
  container: {
    height: 750,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Roboto',
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 29,
    letterSpacing: 0,
    textAlign: 'left',
    color: color.black,
    paddingHorizontal: 40,
    paddingTop: 50,
    paddingBottom: 20,
  },
  inputContainer: {
    // width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginBottom: 20,
    opacity: 50,
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomColor: '#E2E2E2',
    marginHorizontal: 20,
  },
  inputBox: {
    opacity: 50,
    paddingLeft: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
  },
  btnBox: {
    backgroundColor: '#5383ec',
    // alignItems: 'center',
    padding: 20,
    marginHorizontal: 16,
    borderRadius: 10,
    marginTop: 100,
  },
  btntext: {
    color: color.white,
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
