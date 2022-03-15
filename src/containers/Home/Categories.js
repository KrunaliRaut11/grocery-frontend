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
    imgURL: require('../../assets/images/vegetables.png'),
    productName: 'Fruits & Vegitables',
  },
  {
    id: '2',
    imgURL: require('../../assets/images/oil-masala.png'),
    productName: 'Oil & Masala',
  },
  {
    id: '3',
    imgURL: require('../../assets/images/Eggs-meat-fish.png'),
    productName: 'Eggs, Meat & Fish',
  },
  {
    id: '4',
    imgURL: require('../../assets/images/home-cleaning.png'),
    productName: 'Cleaning & Household',
  },
  {
    id: '5',
    imgURL: require('../../assets/images/beauty-hygine.png'),
    productName: 'Beauty & Hygene',
  },
  {
    id: '6',
    imgURL: require('../../assets/images/snacks-branded-foods.png'),
    productName: 'Snacks & Packed Foods',
  },
  {
    id: '7',
    imgURL: require('../../assets/images/clod-drink-juices.png'),
    productName: 'Bevrages',
  },
  {
    id: '8',
    imgURL: require('../../assets/images/bakery-cake-dairy.png'),
    productName: 'Bakery & Dairy',
  },
  {
    id: '9',
    imgURL: require('../../assets/images/foodgrains.png'),
    productName: 'Foodgrains',
  },
];

const Categories = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.headingRow}>
        <Text style={styles.heading}>Category</Text>
        <Text style={styles.headingText}>See all</Text>
      </View>
      <View style={{marginHorizontal: 16}}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Categories')}
              style={styles.productContainer}>
              <Image source={item.imgURL} style={styles.image} />
              <Text style={styles.name}>{item.productName}</Text>
            </TouchableOpacity>
          )}
          numColumns={3}
          keyExtractor={item => item.id}
        />
      </View>
    </>
  );
};

export default Categories;
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
    marginRight: 10,
    padding: 8,
    borderRadius: 18,
    marginVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
  },
  name: {
    fontFamily: 'Montserrat',
    fontSize: 9,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 18,
    letterSpacing: -0.2800000011920929,
    textAlign: 'center',
    color: color.black,
    paddingTop: 10,
  },
});
