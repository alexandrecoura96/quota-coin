import React from 'react';
import {View} from './View';
import {useHomeViewModel} from './useHomeViewModel';

export const Home = () => {
  const {filteredData, hasError, handleSearch, onHandleKeyboardDismiss} =
    useHomeViewModel();
  return (
    <View
      filteredData={filteredData}
      hasError={hasError}
      handleSearch={handleSearch}
      onHandleKeyboardDismiss={onHandleKeyboardDismiss}
    />
  );
};
