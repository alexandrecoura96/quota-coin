import React from 'react';
import {View} from './View';
import {useSplashScreenViewModel} from './useSplashScreenViewModel';

export const SplashScreen = () => {
  useSplashScreenViewModel();
  return <View />;
};
