import React from 'react';
import {View} from './View';
import {useHomeViewModel} from './useHomeViewModel';

export const Home = () => {
  const {
    filteredData,
    hasError,
    handleSearch,
    onHandleKeyboardDismiss,
    handleLoadMore,
    isLoading,
    error,
    onHandleTryAgain,
  } = useHomeViewModel();
  return (
    <View
      onHandleTryAgain={onHandleTryAgain}
      error={error}
      isLoading={isLoading}
      handleLoadMore={handleLoadMore}
      filteredData={filteredData}
      hasError={hasError}
      handleSearch={handleSearch}
      onHandleKeyboardDismiss={onHandleKeyboardDismiss}
    />
  );
};
