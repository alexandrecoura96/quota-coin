import React from 'react';
import {FlatList, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {CoinListItem} from '../../components/CoinListItem';
import {PriceVariation} from '../../components/PriceVariation';
import {SearchBar} from '../../components/SearchBar';
import {Container, Title} from './styles';
import {HomeViewProps} from './types';

export const View = ({
  filteredData,
  handleSearch,
  onHandleKeyboardDismiss,
}: HomeViewProps) => {
  return (
    <TouchableWithoutFeedback
      onPress={onHandleKeyboardDismiss}
      style={{height: '100%', backgroundColor: '#fff'}}>
      <Container>
        <Title>Crypto</Title>
        <SearchBar placeholder="Search crypto" onChangeText={handleSearch} />
      </Container>
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          backgroundColor: '#fff',
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
