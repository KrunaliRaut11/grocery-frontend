import React from 'react';
import BottomTab from './src/navigation/BottomTab';
import SplashScreen from './src/pages/OrderAccepted';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
const App = () => {
  return (
    <>
      {/* <SplashScreen /> */}
      <NavigationContainer headerMode="none">
        {/* <BottomTab /> */}
        <AuthStack />
      </NavigationContainer>
    </>
  );
};

export default App;
