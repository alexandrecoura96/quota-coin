import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SplashScreen} from '../screens/SplashScreen';

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      {/* <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={AppTabRoutes} /> */}
    </Stack.Navigator>
  );
}
