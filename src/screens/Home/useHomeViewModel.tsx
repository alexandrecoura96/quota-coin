import {useContext} from 'react';
import {DataContext} from '../../components/DataProvider/View';

export const useHomeViewModel = () => {
  const context = useContext(DataContext);
  const {data, hasError} = context || {};

  return {data, hasError};
};
