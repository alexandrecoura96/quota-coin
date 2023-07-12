import React, {useCallback} from 'react';
import {ActivityIndicator, ListRenderItemInfo} from 'react-native';
import {CoinListItem} from '../../components/CoinListItem';
import {ErrorStatement} from '../../components/ErrorStatement';
import {PriceVariation} from '../../components/PriceVariation';
import {SearchBar} from '../../components/SearchBar';
import {DataType} from '../../models/useGetMarketCoins/types';
import {
  Container,
  List,
  NotFounded,
  StatementContainer,
  Title,
  Touchable,
} from './styles';
import {HomeViewProps} from './types';

export const View = ({
  filteredData,
  handleSearch,
  onHandleKeyboardDismiss,
  handleLoadMore,
  onHandleTryAgain,
  isLoading,
  error,
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

  if (isLoading) {
    return (
      <StatementContainer>
        <ActivityIndicator size={32} color="red" />
      </StatementContainer>
    );
  }

  if (error) {
    return (
      <StatementContainer>
        <ErrorStatement onPress={onHandleTryAgain} />
      </StatementContainer>
    );
  }

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
            onEndReached={handleLoadMore}
          />
        ) : (
          <NotFounded>Not founded</NotFounded>
        )}
      </>
    </Touchable>
  );
};
