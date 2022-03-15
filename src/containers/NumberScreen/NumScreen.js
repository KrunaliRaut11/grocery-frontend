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

const NumScreen = () => {
  const navigation = useNavigation();

  return (
    <>

      {/* <KeyboardAvoidingView behavior="height"> */}
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
            <Text style={styles.heading}>Enter your mobile number</Text>
            <Text style={styles.subText}>Mobile Number</Text>
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
            <TouchableOpacity
              onPress={() => navigation.navigate('Verification')}
              style={styles.arrowDiv}>
              <Image
                style={styles.arrowIcon}
                source={require('../../assets/images/white-arrow.png')}
              />
            </TouchableOpacity>
          </ImageBackground>
        </View>
      {/* </KeyboardAvoidingView> */}
    </>
  );
};

export default NumScreen;
const styles = StyleSheet.create({
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
    marginBottom: 10,
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
  arrowDiv: {
    backgroundColor: color.primary,
    borderRadius: 50,
    width: 67,
    height: 67,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '80%',
    marginTop: 400,
  },
});
