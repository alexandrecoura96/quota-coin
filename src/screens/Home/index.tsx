import React from 'react';
import {View} from './View';
import {useHomeViewModel} from './useHomeViewModel';

export const Home = () => {
  const {
    filteredData,
    hasError,
    handleSearch,
    onHandleKeyboardDismiss,
    isLoading,
    error,
    onHandleTryAgain,
    onRefresh,
    refreshControl,
  } = useHomeViewModel();
  return (
    <View
      refreshControl={refreshControl}
      onRefresh={onRefresh}
      onHandleTryAgain={onHandleTryAgain}
      error={error}
      isLoading={isLoading}
      filteredData={filteredData}
      hasError={hasError}
      handleSearch={handleSearch}
      onHandleKeyboardDismiss={onHandleKeyboardDismiss}
    />
  );
};
