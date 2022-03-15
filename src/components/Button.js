import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import color from '../common/color'

const Button = ({title, onPress}) => {
  return (
    <>
      <View>
        <TouchableOpacity onPress={onPress} style={styles.btnBox}>
          <Text
            style={{
              color: color.white,
              fontFamily: 'Alata',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: 18,
              letterSpacing: 0,
              textAlign: 'center',
              fontSize: 18,
              textAlign: 'center',
            }}>
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnBox: {
    backgroundColor: color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginHorizontal: 16,
    borderRadius: 10,
  },
});
