import {useCallback, useContext, useState} from 'react';
import {Keyboard} from 'react-native';
import {DataContext} from '../../components/DataProvider/View';

export const useHomeViewModel = () => {
  const context = useContext(DataContext);
  const {data, hasError} = context || {};
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

  const onHandleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return {filteredData, hasError, handleSearch, onHandleKeyboardDismiss};
};
