import React,{useState, useEffect} from 'react';
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
import {fetchCategory} from '../../services/home';

const DATA = [
  {
    id: '1',
    image: require('../../assets/images/vegetables.png'),
    name: 'Fruits & Vegitables',
  },
  {
    id: '2',
    image: require('../../assets/images/oil-masala.png'),
    name: 'Oil & Masala',
  },
  {
    id: '3',
    image: require('../../assets/images/Eggs-meat-fish.png'),
    name: 'Eggs, Meat & Fish',
  },
  {
    id: '4',
    image: require('../../assets/images/home-cleaning.png'),
    name: 'Cleaning & Household',
  },
  {
    id: '5',
    image: require('../../assets/images/beauty-hygine.png'),
    name: 'Beauty & Hygene',
  },
  {
    id: '6',
    image: require('../../assets/images/snacks-branded-foods.png'),
    name: 'Snacks & Packed Foods',
  },
  {
    id: '7',
    image: require('../../assets/images/clod-drink-juices.png'),
    name: 'Bevrages',
  },
  {
    id: '8',
    image: require('../../assets/images/bakery-cake-dairy.png'),
    name: 'Bakery & Dairy',
  },
  {
    id: '9',
    image: require('../../assets/images/foodgrains.png'),
    name: 'Foodgrains',
  },
];

const Categories = () => {
  const [category, setCategory] = useState();
  const navigation = useNavigation();

  const getCategories = async () => {
    try {
      const res = await fetchCategory();
      console.log("test",res);
      if (res.status) {
        setCategory(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <View style={styles.headingRow}>
        <Text style={styles.heading}>Category</Text>
        <Text style={styles.headingText}>See all</Text>
      </View>
      <View style={{marginHorizontal: 16}}>
        <FlatList
          data={category}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Categories', {
                categoryUid: item.uid,
              })}
              style={styles.productContainer}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.name}>{item.name}</Text>
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
