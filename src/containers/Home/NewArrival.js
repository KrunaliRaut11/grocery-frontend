import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '../../common/color';
import {useNavigation} from '@react-navigation/native';

const DATA = [
  {
    id: '1',
    imgURL: require('../../assets/images/strawbery.png'),
    productName: 'Strawbery',
    productQuantity: '6pcs, Price',
    price: '$5.55',
  },
  {
    id: '2',
    imgURL: require('../../assets/images/oil.png'),
    productName: 'Olive Oil',
    productQuantity: '1kg, Price',
    price: '$5.55',
  },
  {
    id: '3',
    imgURL: require('../../assets/images/strawbery.png'),
    productName: 'Strawbery',
    productQuantity: '6pcs, Price',
    price: '$5.55',
  },
  {
    id: '4',
    imgURL: require('../../assets/images/oil.png'),
    productName: 'Olive Oil',
    productQuantity: '1kg, Price',
    price: '$5.55',
  },
  {
    id: '5',
    imgURL: require('../../assets/images/strawbery.png'),
    productName: 'Strawbery',
    productQuantity: '6pcs, Price',
    price: '$5.55',
  },
];
const NewArrival = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.headingRow}>
        <Text style={styles.heading}>New Arrival</Text>
        <Text style={styles.headingText}>See all</Text>
      </View>
      <View style={{margin: 16}}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductDetails')}
              style={styles.productContainer}>
              <Image source={item.imgURL} style={styles.image} />
              <Text style={styles.name}>{item.productName}</Text>
              <Text style={styles.quantity}>{item.productQuantity}</Text>
              <View style={styles.row}>
                <Text style={styles.price}>{item.price}</Text>
                <TouchableOpacity onPress={() => navigation.navigate('MyCart')} style={styles.addContainer}>
                  <Image
                    style={styles.icons}
                    source={require('../../assets/images/plus-white.png')}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

export default NewArrival;
const styles = StyleSheet.create({
  headingRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 20,
    alignItems: 'center',
  },
  heading: {
    fontFamily: 'Alata',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 33,
    textAlign: 'left',
    color: color.black,
  },
  headingText: {
    fontFamily: 'Alata',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
    textAlign: 'left',
    color: color.primary,
  },

  image: {
    height: 80,
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  productContainer: {
    backgroundColor: color.white,
    // borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    marginRight: 20,
    padding: 20,
    borderRadius: 18,
  },
  name: {
    fontFamily: 'Alata',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0.10000000149011612,
    textAlign: 'left',
    color: color.black,
    paddingTop: 10,
    width: 130,
  },
  quantity: {
    fontFamily: 'Alata',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0,
    textAlign: 'left',
    color: color.textColor,
    paddingTop: 5,
  },
  price: {
    fontFamily: 'Alata',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: 0.10000000149011612,
    textAlign: 'left',
    color: color.black,
    paddingTop: 10,
  },
  addContainer: {
    backgroundColor: color.primary,
    height: 45,
    width: 45,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
