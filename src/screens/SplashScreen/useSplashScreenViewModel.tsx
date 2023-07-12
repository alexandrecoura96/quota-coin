import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {NavigationType} from '../../models/useGetMarketCoins/types';

export const useSplashScreenViewModel = () => {
  const navigation = useNavigation<NavigationType>();

  useEffect(() => {
    setTimeout(() => navigation.replace('Home'), 2000);
  }, [navigation]);
};
