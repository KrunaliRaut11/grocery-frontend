import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from '../common/color';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.Headercontainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/images/left-arrow.png')}
            style={styles.Headericon}
          />
        </TouchableOpacity>
        <Text style={styles.Headertext}>{title}</Text>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  Headercontainer: {
    // width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: color.white,
  },
  Headericon: {
    marginHorizontal: 25,
  },
  Headertext: {
    fontFamily: 'Alata',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    marginBottom: 5,
    alignItems: 'center',
    color: color.black,
  },
});
