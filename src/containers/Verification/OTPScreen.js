import React from 'react';
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '../../common/color';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';

const OTPScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView behavior="height">
        <View style={{backgroundColor: color.white}}>
          <ImageBackground
            source={require('../../assets/images/bgFull.png')}
            resizeMode="cover"
            style={styles.image}>
            <View style={styles.Headercontainer}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('../../assets/images/left-arrow.png')}
                  style={styles.Headericon}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.heading}>Enter your 4-digit code</Text>
            <Text style={styles.subText}>Code</Text>
            <View style={styles.inputContainer}>
              <View style={styles.box}>
                <TextInput style={styles.inputBox} autoFocus={true} />
                <TextInput style={styles.inputBox} autoFocus={true} />
                <TextInput style={styles.inputBox} autoFocus={true} />
                <TextInput style={styles.inputBox} autoFocus={true} />
              </View>
            </View>

            <View style={styles.resendBox}>
              <Text style={styles.resendText}>Resend Code</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
                style={styles.arrowDiv}>
                <Image
                  style={styles.arrowIcon}
                  source={require('../../assets/images/white-arrow.png')}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default OTPScreen;
const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Alata',
    fontSize: 26,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 29,
    textAlign: 'left',
    color: color.black,
    marginLeft: 20,
    marginTop: 40,
  },
  subText: {
    fontFamily: 'Alata',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 29,
    textAlign: 'left',
    marginLeft: 20,
    marginTop: 20,
  },
  image: {
    // flex: 1,
    justifyContent: 'center',
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
    borderBottomWidth: 1,
    marginRight: 5,
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

  arrowDiv: {
    backgroundColor: color.primary,
    borderRadius: 50,
    width: 67,
    height: 67,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resendBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginLeft: '80%',
    marginTop: 400,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  resendText: {
    fontFamily: 'Alata',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 29,
    textAlign: 'left',
    color: color.primary,
  },
  Headercontainer: {
    // width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  Headericon: {
    marginHorizontal: 25,
  },
});
