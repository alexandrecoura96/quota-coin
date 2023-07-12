import {useCallback, useContext, useState} from 'react';
import {Keyboard} from 'react-native';
import {DataContext} from '../../components/DataProvider/View';

export const useHomeViewModel = () => {
  const context = useContext(DataContext);
  const {data, hasError, setPage, isLoading, fetchMarketCoinsList} =
    context || {};
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = useCallback(
    (text: string) => {
      const filtered = data?.filter(
        item =>
          item.name.toLowerCase().includes(text.toLowerCase()) ||
          item.symbol.toLowerCase().includes(text.toLowerCase()),
      );

      setFilteredData(filtered);
    },
    [data],
  );

  const handleLoadMore = useCallback(() => {
    setPage && setPage((prevPage: number) => prevPage + 1);
  }, [setPage]);

  const onHandleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const onHandleTryAgain = useCallback(() => {
    fetchMarketCoinsList && fetchMarketCoinsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    filteredData,
    hasError,
    handleSearch,
    onHandleKeyboardDismiss,
    handleLoadMore,
    isLoading,
    error: hasError,
    onHandleTryAgain,
  };
};
