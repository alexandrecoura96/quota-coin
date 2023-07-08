import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Home} from '../screens/Home';
import {SplashScreen} from '../screens/SplashScreen';

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      {/* {/* <Stack.Screen name="Welcome" component={Welcome} /> */}
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
