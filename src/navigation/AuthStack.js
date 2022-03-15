import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import OnBoarding from '../pages/OnBoarding';
import SignIn from '../pages/SignIn';
import NumberScreen from '../pages/NumberScreen';
import Verification from '../pages/Verification';
import SignUp from '../pages/SignUp';
import BottomTab from './BottomTab';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="OnBoarding"
      component={OnBoarding}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="NumberScreen"
      component={NumberScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Verification"
      component={Verification}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="HomeTabs"
      component={BottomTab}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AuthStack;
