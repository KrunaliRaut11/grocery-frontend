import React, {useState} from 'react';
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
import Button from '../../components/Button';
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
    id: '6',
    imgURL: require('../../assets/images/Pepsi.png'),
    productName: 'Pepsi Can ',
    productQuantity: '330ml, Price',
    price: '$5.55',
  },
];

const AllFavourite = () => {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  const navigation = useNavigation();

  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }

  return (
    <>
      <View style={{backgroundColor: color.white, flex: 1}}>
        <Text style={styles.heading}>Favorurite</Text>
        <ScrollView>
          <View style={{margin: 16}}>
            <FlatList
              data={DATA}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('ProductDetails')}
                  style={styles.productContainer}>
                  <Image source={item.imgURL} style={styles.image} />
                  <View>
                    <Text style={styles.name}>{item.productName}</Text>
                    <Text style={styles.quantity}>{item.productQuantity}</Text>
                    <View style={styles.increRow}>
                      <TouchableOpacity onPress={decrementCounter}>
                        <Image
                          style={styles.incrementIcons}
                          source={require('../../assets/images/remove.png')}
                        />
                      </TouchableOpacity>

                      <View style={styles.incrementContainer}>
                        <Text style={styles.incrementText}>{counter}</Text>
                      </View>
                      <TouchableOpacity onPress={incrementCounter}>
                        <Image
                          style={styles.incrementIcons}
                          source={require('../../assets/images/add.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  <View style={styles.row}>
                    <Text style={styles.price}>{item.price}</Text>
                    <Image
                      source={require('../../assets/images/accordion.png')}
                      style={styles.iconArrow}
                    />
                  </View>
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
          </View>
          <Button
            title="Add All To Cart"
            onPress={() => navigation.navigate('MyCart')}
          />
        </ScrollView>
      </View>
    </>
  );
};

export default AllFavourite;
const styles = StyleSheet.create({
  heading: {
    fontFamily: 'Alata',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '400',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    padding: 20,
    color: color.black,
  },
  image: {
    // height: 80,
    // marginRight: 'auto',
    // marginLeft: 'auto',
    // marginVertical: 5,
  },
  productContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconArrow: {
    marginTop: 13,
    marginLeft: 15,
  },
  increRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  incrementIcons: {
    margin: 5,
  },
  incrementContainer: {
    width: 35,
    height: 35,
    // elevation: 10,
    borderRadius: 17,
    borderWidth: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
