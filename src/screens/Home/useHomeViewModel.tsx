import React, {useCallback, useContext, useEffect, useState} from 'react';
import {Keyboard, RefreshControl} from 'react-native';
import {DataContext} from '../../components/DataProvider/View';

export const useHomeViewModel = () => {
  const context = useContext(DataContext);
  const {data, hasError, isLoading, fetchMarketCoinsList} = context || {};
  const [filteredData, setFilteredData] = useState(data);
  const [refreshing, setRefreshing] = useState(false);

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

  const onHandleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const onHandleTryAgain = useCallback(() => {
    fetchMarketCoinsList && fetchMarketCoinsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    fetchMarketCoinsList &&
      fetchMarketCoinsList().finally(() => setRefreshing(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const refreshControl = (
    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
  );

  useEffect(() => {
    setFilteredData(data); // Atualiza o estado filteredData com os novos dados
  }, [data]);

  return {
    filteredData,
    hasError,
    handleSearch,
    onHandleKeyboardDismiss,
    isLoading,
    error: hasError,
    onHandleTryAgain,
    onRefresh,
    refreshControl,
  };
};
