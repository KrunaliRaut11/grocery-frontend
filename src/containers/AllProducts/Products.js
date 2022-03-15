import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
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
    imgURL: require('../../assets/images/diet-coke.png'),
    productName: 'Diet Coke',
    productQuantity: '325ml, Price',
    price: '$5.55',
  },
  {
    id: '2',
    imgURL: require('../../assets/images/sprite.png'),
    productName: 'Sprite Can',
    productQuantity: '325ml, Price',
    price: '$5.55',
  },
  {
    id: '3',
    imgURL: require('../../assets/images/apple-juice.png'),
    productName: 'Apple  Juice',
    productQuantity: '2L, Price',
    price: '$5.55',
  },
  {
    id: '4',
    imgURL: require('../../assets/images/juice-apple.png'),
    productName: 'Orenge Juice',
    productQuantity: '2L, Price',
    price: '$5.55',
  },
  {
    id: '5',
    imgURL: require('../../assets/images/coca-cola-can.png'),
    productName: 'Coca Cola Can',
    productQuantity: '330ml, Price',
    price: '$5.55',
  },
  {
    id: '6',
    imgURL: require('../../assets/images/Pepsi.png'),
    productName: 'Pepsi Can ',
    productQuantity: '330ml, Price',
    price: '$5.55',
  },
];

const Products = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={{marginBottom: 120, backgroundColor: color.white}}>
        <View style={styles.HeaderContainer}>
          <Image
            source={require('../../assets/images/left-arrow.png')}
            style={styles.icon}
          />
          <Text style={styles.HeaderText}>Beverages</Text>
          <Image
            source={require('../../assets/images/filter.png')}
            style={styles.icon}
          />
        </View>
        <ScrollView>
          <View style={{margin: 16}}>
            <FlatList
              data={DATA}
              numColumns={2}
              renderItem={({item}) => (
                <TouchableOpacity 
            onPress={() => navigation.navigate('ProductDetails')}
            style={styles.productContainer}>
                  <Image source={item.imgURL} style={styles.image} />
                  <Text style={styles.name}>{item.productName}</Text>
                  <Text style={styles.quantity}>{item.productQuantity}</Text>
                  <View style={styles.row}>
                    <Text style={styles.price}>{item.price}</Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('MyCart')}
                      style={styles.addContainer}>
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
        </ScrollView>
      </View>
    </>
  );
};

export default Products;
const styles = StyleSheet.create({
  HeaderContainer: {
    // width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  icon: {
    marginHorizontal: 25,
  },
  HeaderText: {
    fontFamily: 'Alata',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    marginBottom: 5,
    alignItems: 'center',
    color: color.black,
  },
  image: {
    // height: 80,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginVertical: 5,
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
    margin: 5,
    padding: 15,
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
    width: 150,
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
    paddingTop: 20,
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
