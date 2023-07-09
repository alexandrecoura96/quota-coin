import React, {ReactNode, createContext} from 'react';
import {useGetMarketCoins} from '../../hooks/useGetMarketCoins';
import {DataContextValue} from './types';

const DataContext = createContext<DataContextValue | null>(null);

const DataProvider = ({children}: {children: ReactNode}) => {
  const {data, loading, hasError, fetchMarketCoinsList} = useGetMarketCoins();

  const contextValue: DataContextValue = {
    data: data,
    isLoading: loading,
    hasError: hasError,
    fetchMarketCoinsList,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export {DataContext, DataProvider};
