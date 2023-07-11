import {useNavigation} from '@react-navigation/native';
import {useContext, useEffect} from 'react';
import {DataContext} from '../../components/DataProvider/View';
import {NavigationType} from '../../models/useGetMarketCoins/types';

export const useSplashScreenViewModel = () => {
  const context = useContext(DataContext);
  const {data, fetchMarketCoinsList} = context || {};
  const navigation = useNavigation<NavigationType>();

  useEffect(() => {
    fetchMarketCoinsList && fetchMarketCoinsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (data?.length) {
      navigation.replace('Home');
    }
  }, [data?.length, navigation]);
};
