import React from 'react';
import {FlatList, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {CoinListItem} from '../../components/CoinListItem';
import {PriceVariation} from '../../components/PriceVariation';
import {SearchBar} from '../../components/SearchBar';
import {Container} from './styles';
import {HomeViewProps} from './types';

export const View = ({
  filteredData,
  handleSearch,
  onHandleKeyboardDismiss,
}: HomeViewProps) => {
  return (
    <TouchableWithoutFeedback onPress={onHandleKeyboardDismiss}>
      <Container>
        <SearchBar placeholder="Search crypto" onChangeText={handleSearch} />
      </Container>
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        style={{backgroundColor: 'red'}}
        // ListHeaderComponent={<Title>Crypto</Title>}
        // ListHeaderComponentStyle={{alignItems: 'center'}}
        contentContainerStyle={{
          paddingHorizontal: 24,
          backgroundColor: '#fff',
          height: '100%',
        }}
        renderItem={({item}) => (
          <CoinListItem
            logo={item.image}
            name={item.name}
            ticker={item.symbol}
            price={item.current_price}>
            <PriceVariation variation={item.price_change_percentage_24h} />
          </CoinListItem>
        )}
      />
    </TouchableWithoutFeedback>
  );
};
