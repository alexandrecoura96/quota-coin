import numeral from 'numeral';
import React from 'react';
import {
  Container,
  Content,
  Logo,
  Name,
  Price,
  PrimaryColumn,
  SecondaryColumn,
  Ticker,
} from './styles';
import {CoinListItemProps} from './types';

export function CoinListItem({
  name,
  price,
  ticker,
  children,
  logo,
}: CoinListItemProps) {
  return (
    <Container>
      <Logo source={{uri: logo}} />
      <Content>
        <PrimaryColumn>
          <Ticker>{ticker.toUpperCase()}</Ticker>
          <Name>{name}</Name>
        </PrimaryColumn>
        <SecondaryColumn>
          <Price>{numeral(price).format('$0,0.00')}</Price>
          {children}
        </SecondaryColumn>
      </Content>
    </Container>
  );
}
