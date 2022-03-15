import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {Image, Text, View} from 'react-native';
import color from '../common/color';

import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Categories from '../pages/Categories';
import Favourite from '../pages/Favourite';
import MyCart from '../pages/MyCart';
import AllProducts from '../pages/AllProducts';
import Address from '../pages/Address';
import PaymentOption from '../pages/PaymentOption';
import Account from '../pages/Account';
import MyOrder from '../pages/MyOrder';
import ReferEarn from '../pages/ReferEarn';
import Help from '../pages/CustomerCare';
import MyDetails from '../pages/MyDetails';
import OrderDetails from '../pages/OrderDetails';



const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      options={{headerShown: false}}
      name="Home"
      component={Home}
    />
    <HomeStack.Screen
      options={{headerShown: false}}
      name="ProductDetails"
      component={ProductDetails}
    />
    <HomeStack.Screen
      options={{headerShown: false}}
      name="Categories"
      component={Categories}
    />
    <HomeStack.Screen
      options={{headerShown: false}}
      name="Favourite"
      component={Favourite}
    />
    <HomeStack.Screen
      options={{headerShown: false}}
      name="MyCart"
      component={MyCart}
    />
      <HomeStack.Screen
      options={{headerShown: false}}
      name="AllProducts"
      component={AllProducts}
    />
  </HomeStack.Navigator>
);
const ExploreStack = createStackNavigator();

const ExploreStackScreen = () => (
  <ExploreStack.Navigator>
    <ExploreStack.Screen
      options={{headerShown: false}}
      name="Categories"
      component={Categories}
    />
    {/* <ExploreStack.Screen
      options={{headerShown: false}}
      name="ProductDetails"
      component={ProductDetails}
    />
    <ExploreStack.Screen
      options={{headerShown: false}}
      name="Categories"
      component={Categories}
    /> */}
  </ExploreStack.Navigator>
);
const FavouriteStack = createStackNavigator();

const FavouriteStackScreen = () => (
  <FavouriteStack.Navigator>
    <FavouriteStack.Screen
      options={{headerShown: false}}
      name="Favourite"
      component={Favourite}
    />
    {/* <FavouriteStack.Screen
      options={{headerShown: false}}
      name="ProductDetails"
      component={ProductDetails}
    />
    <FavouriteStack.Screen
      options={{headerShown: false}}
      name="Categories"
      component={Categories}
    /> */}
  </FavouriteStack.Navigator>
);
const CartStack = createStackNavigator();

const CartStackScreen = () => (
  <CartStack.Navigator>
    <CartStack.Screen
      options={{headerShown: false}}
      name="MyCart"
      component={MyCart}
    />
    <CartStack.Screen
      options={{headerShown: false}}
      name="MyAddress"
      component={Address}
    />
    <CartStack.Screen
      options={{headerShown: false}}
      name="PaymentOption"
      component={PaymentOption}
    />
  </CartStack.Navigator>
);
const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      options={{headerShown: false}}
      name="Account"
      component={Account}
    />
   
    <ProfileStack.Screen
      options={{headerShown: false}}
      name="MyOrder"
      component={MyOrder}
    />
     <ProfileStack.Screen
      options={{headerShown: false}}
      name="Address"
      component={Address}
    />
     <ProfileStack.Screen
      options={{headerShown: false}}
      name="MyDetails"
      component={MyDetails}
    />
     <ProfileStack.Screen
      options={{headerShown: false}}
      name="ReferEarn"
      component={ReferEarn}
    />
    <ProfileStack.Screen
      options={{headerShown: false}}
      name="Help"
      component={Help}
    />
        <ProfileStack.Screen
      options={{headerShown: false}}
      name="OrderDetails"
      component={OrderDetails}
    />
  </ProfileStack.Navigator>
);
const BottomTab = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            height: 70,
            paddingBottom: 10,
            borderTopEndRadius: 20,
            borderTopStartRadius: 20,
          },
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeStackScreen}
          options={{
            headerShown: false,

            tabBarIcon: ({focused, navigation}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
                <Image
                  source={require('../assets/images/shopB.png')}
                  style={{
                    tintColor: focused ? color.primary : '#000',
                  }}
                />
                <Text
                  style={{
                    color: focused ? color.primary : '#000000',
                    fontSize: 12,
                  }}>
                  Shop
                  {navigation}
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="ExploreScreen"
          component={ExploreStackScreen}
          options={{
            headerShown: false,

            tabBarIcon: ({focused, navigation}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
                <Image
                  source={require('../assets/images/exploreB.png')}
                  style={{
                    tintColor: focused ? color.primary : '#000',
                  }}
                />
                <Text
                  style={{
                    color: focused ? color.primary : '#000000',
                    fontSize: 12,
                  }}>
                  Explore
                  {navigation}
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="CartScreen"
          component={CartStackScreen}
          options={{
            headerShown: false,

            tabBarIcon: ({focused, navigation}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
                <Image
                  source={require('../assets/images/cartB.png')}
                  style={{
                    tintColor: focused ? color.primary : '#000',
                  }}
                />
                <Text
                  style={{
                    color: focused ? color.primary : '#000000',
                    fontSize: 12,
                  }}>
                  Cart
                  {navigation}
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="FavouriteScreen"
          component={FavouriteStackScreen}
          options={{
            headerShown: false,

            tabBarIcon: ({focused, navigation}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
                <Image
                  source={require('../assets/images/favB.png')}
                  style={{
                    tintColor: focused ? color.primary : '#000',
                  }}
                />
                <Text
                  style={{
                    color: focused ? color.primary : '#000000',
                    fontSize: 12,
                  }}>
                  Favourite
                  {navigation}
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={ProfileStackScreen}
          options={{
            headerShown: false,

            tabBarIcon: ({focused, navigation}) => (
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  top: 10,
                }}>
                <Image
                  source={require('../assets/images/shopB.png')}
                  style={{
                    tintColor: focused ? color.primary : '#000',
                  }}
                />
                <Text
                  style={{
                    color: focused ? color.primary : '#000000',
                    fontSize: 12,
                  }}>
                  Account
                  {navigation}
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTab;
