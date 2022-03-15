import React from 'react';
import {Text, View, Image, StyleSheet, TextInput} from 'react-native';
import color from '../../common/color';

const SearchBar = () => {
  return (
    <>
      <Image
        style={styles.logo}
        source={require('../../assets/images/green-logo.png')}
      />
      <View style={styles.locationRow}>
        <Image
          style={styles.icons}
          source={require('../../assets/images/address.png')}
        />
        <Text style={styles.locationText}>Lucknow, Uttar Pradesh</Text>
      </View>
      <View style={styles.searchBar}>
        <Image
          style={styles.icons}
          source={require('../../assets/images/search.png')}
        />
        <TextInput
          style={styles.searchText}
          //   autoFocus={true}
          placeholder="Search Store"
        />
      </View>
    </>
  );
};

export default SearchBar;
const styles = StyleSheet.create({
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 50,
    height: 50,
    margin: 20,
  },
  
  locationRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationText: {
    fontFamily: 'Alata',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 25,
    letterSpacing: 0,
    textAlign: 'center',
    color: color.black,
  },
  searchText: {
    fontFamily: 'Alata',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 19,
    letterSpacing: 0,
    textAlign: 'center',
    color: color.textColor,
  },
  searchBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 8,
    backgroundColor: '#F2F3F2',
    borderRadius: 15,
    margin: 20,
  },
  icons: {
    marginHorizontal: 10,
  },
});
