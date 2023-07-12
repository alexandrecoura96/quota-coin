import {useState} from 'react';
import {DataType} from '../models/useGetMarketCoins/types';
import {api} from '../services/api';

export const useGetMarketCoins = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Array<DataType> | null>(null);
  const [page, setPage] = useState<number>(1);
  const [hasError, setHasError] = useState(false);

  const url =
    '/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en';

  async function fetchMarketCoinsList() {
    try {
      setHasError(false);
      const response = await api.get(url, {
        params: {page: page},
      });
      setData(response.data);
    } catch (error) {
      console.log(error);
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
    setPage,
    page,
  };
};
