import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';

export const useSplashScreenViewModel = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => navigation.navigate('Home'), 5000);
  });
};
