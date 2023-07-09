import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import Error from '../../assets/svgs/error.svg';
import {CoinListItem} from '../../components/CoinListItem';
import {PriceVariation} from '../../components/PriceVariation';
import {Container, Title} from './styles';
import {HomeViewProps} from './types';

export const View = ({data, hasError}: HomeViewProps) => {
  if (hasError) {
    <Container>
      <Error height={100} width={100} />
    </Container>;
  }

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      contentContainerStyle={{paddingHorizontal: 24, backgroundColor: '#fff'}}
      ListHeaderComponent={<Title>Crypto</Title>}
      ListHeaderComponentStyle={{alignItems: 'center'}}
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
  );
};
