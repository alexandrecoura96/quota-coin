import {useState} from 'react';
import {DataType} from '../models/useGetMarketCoins/types';
import {api} from '../services/api';

export const useGetMarketCoins = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Array<DataType> | null>(null);
  const [hasError, setHasError] = useState(false);

  const url = '/api/v3/coins/markets';

  async function fetchMarketCoinsList() {
    try {
      setHasError(false);
      setLoading(true);
      const response = await api.get(url, {
        params: {
          page: 1,
          vs_currency: 'usd',
          order: 'market_cap_desc',
          per_page: 100,
          sparkline: false,
          locale: 'en',
        },
      });
      setData(response.data);
    } catch (error) {
      setLoading(false);
      setHasError(true);
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
