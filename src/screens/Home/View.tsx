import React, {useCallback} from 'react';
import {ListRenderItemInfo} from 'react-native';
import {CoinListItem} from '../../components/CoinListItem';
import {PriceVariation} from '../../components/PriceVariation';
import {SearchBar} from '../../components/SearchBar';
import {DataType} from '../../models/useGetMarketCoins/types';
import {Container, List, NotFounded, Title, Touchable} from './styles';
import {HomeViewProps} from './types';

export const View = ({
  filteredData,
  handleSearch,
  onHandleKeyboardDismiss,
}: HomeViewProps) => {
  const renderItem = useCallback(({item}: ListRenderItemInfo<DataType>) => {
    return (
      <CoinListItem
        logo={item.image}
        name={item.name}
        ticker={item.symbol}
        price={item.current_price}>
        <PriceVariation variation={item.price_change_percentage_24h} />
      </CoinListItem>
    );
  }, []);

  return (
    <Touchable onPress={onHandleKeyboardDismiss}>
      <>
        <Container>
          <Title>Crypto</Title>
          <SearchBar placeholder="Search crypto" onChangeText={handleSearch} />
        </Container>
        {filteredData?.length ? (
          <List
            data={filteredData}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
          />
        ) : (
          <NotFounded>Not founded</NotFounded>
        )}
      </>
    </Touchable>
  );
};
