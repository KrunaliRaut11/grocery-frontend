import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
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
    imgURL: require('../../assets/images/bakery-cake-dairy.png'),
    productName: 'Bakery & Dairy',
  },
  {
    id: '5',
    imgURL: require('../../assets/images/home-cleaning.png'),
    productName: 'Cleaning & Household',
  },
  {
    id: '6',
    imgURL: require('../../assets/images/clod-drink-juices.png'),
    productName: 'Bevrages',
  },
  {
    id: '7',
    imgURL: require('../../assets/images/beauty-hygine.png'),
    productName: 'Beauty & Hygene',
  },
  {
    id: '8',
    imgURL: require('../../assets/images/foodgrains.png'),
    productName: 'Foodgrains',
  },
];
const colors = [
  '#EEF7F1',
  '#FEF6ED',
  '#FDE8E4',
  '#F4EBF7',
  '#FFF8E5',
  '#EDF7FC',
  '#ECE9FE',
  '#F9E2EB',
];
const borderColor = [
  '#53B175',
  '#F8A44C',
  '#F7A593',
  '#D3B0E0',
  '#FDE598',
  '#B7DFF5',
  '#836AF6',
  '#F7A593',
];
const AllCategory = () => {
  const navigation = useNavigation();

  return (
    <>
      <ScrollView style={{marginBottom: 60, backgroundColor: color.white}}>
        <View style={{marginHorizontal: 16}}>
          <Text style={styles.heading}>Find Products</Text>
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
          <FlatList
            data={DATA}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('AllProducts')}
                style={[
                  styles.productContainer,
                  {
                    backgroundColor: colors[index % colors.length],
                    borderColor: borderColor[index % borderColor.length],
                  },
                ]}>
                <Image source={item.imgURL} style={styles.image} />
                <Text style={styles.name}>{item.productName}</Text>
              </TouchableOpacity>
            )}
            numColumns={2}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default AllCategory;
const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: color.white,
    marginRight: 10,
    padding: 8,
    borderRadius: 18,
    marginVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 150,
    borderWidth: 1,
  },
  name: {
    fontFamily: 'Alata',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.10000000149011612,
    textAlign: 'center',

    color: color.black,
    paddingTop: 10,
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
    marginVertical: 20,
  },
  icons: {
    marginHorizontal: 10,
  },
  heading: {
    fontFamily: 'Alata',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'center',
    color: color.black,
    paddingVertical: 20,
  },
});
