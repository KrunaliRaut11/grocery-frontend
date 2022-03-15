import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '../../common/color';
import Accordion from '../../components/Accordion';
import {details} from './data';
import {useNavigation} from '@react-navigation/native';

const Details = () => {
  const [data, setData] = useState(details);
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  const navigation = useNavigation();

  if (counter <= 1) {
    decrementCounter = () => setCounter(1);
  }
  return (
    <>
      <View style={{backgroundColor: color.white}}>
        <View style={styles.productContainer}>
          <View style={styles.row}>
            <Image
              style={styles.icons}
              source={require('../../assets/images/left-arrow.png')}
            />
            <Image
              style={styles.icons}
              source={require('../../assets/images/add-to-cart.png')}
            />
          </View>
          <Image
            style={styles.productImage}
            source={require('../../assets/images/product.png')}
          />
        </View>
        <View style={{padding: 25}}>
          <View style={styles.row}>
            <Text style={styles.mainText}>Naturel Red Apple</Text>
            <Image
              style={styles.icons}
              source={require('../../assets/images/favourite.png')}
            />
          </View>
          <Text>1kg, Price</Text>
          <View style={styles.row}>
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
            <Text style={styles.mainText}>$5.55</Text>
          </View>
          {/* accordion */}
          <View>
            {data.map(item => {
              const {id} = item;
              return <Accordion key={id} {...item} />;
            })}
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('MyCart')}
            style={styles.btnContainer}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Image
                style={styles.incrementIcons}
                source={require('../../assets/images/cart.png')}
              />
              <Text style={styles.orderText}>1 items</Text>
              <Text style={styles.orderText}> • </Text>
              <Text style={styles.orderText}>$500</Text>
            </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Text style={styles.orderText}>view cart</Text>

              <Image
                style={styles.incrementIcons}
                source={require('../../assets/images/white-arrow.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Details;
const styles = StyleSheet.create({
  productContainer: {
    backgroundColor: color.productBg,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    padding: 25,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productImage: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 20,
  },
  mainText: {
    fontFamily: 'Alata',
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '400',
    // lineHeight: 18,
    letterSpacing: 0.10000000149011612,
    textAlign: 'left',
    color: color.black,
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
    width: 45.67,
    height: 45.67,
    // elevation: 10,
    borderRadius: 17,
    borderWidth: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderText: {
    color: color.white,
    fontFamily: 'Alata',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    letterSpacing: -0.2800000011920929,
    textAlign: 'center',
    paddingTop: 5,
  },

  btnContainer: {
    backgroundColor: color.primary,
    borderRadius: 10,
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
});
