import {useState} from 'react';
import {Alert} from 'react-native';
import {DataType} from '../models/useGetMarketCoins/types';
import {api} from '../services/api';

export const useGetMarketCoins = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Array<DataType> | null>(null);
  const [hasError, setHasError] = useState(false);

  const url =
    '/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';

  async function fetchMarketCoinsList() {
    try {
      const response = await api.get(url, {
        params: {page: 1},
      });
      setData(response.data);
    } catch (error) {
      setLoading(false);
      setHasError(true);
      Alert.alert('Ops', 'Try again later');
    } finally {
      setLoading(false);
    }
  }

  return {
    data,
    loading,
    fetchMarketCoinsList,
    hasError,
  };
};
