import React from 'react';
import {View} from './View';
import {useHomeViewModel} from './useHomeViewModel';

export const Home = () => {
  const {data, hasError} = useHomeViewModel();
  return <View data={data} hasError={hasError} />;
};
