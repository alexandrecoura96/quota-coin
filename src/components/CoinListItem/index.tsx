import numeral from 'numeral';
import React, {PureComponent} from 'react';
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

export class CoinListItem extends PureComponent<CoinListItemProps> {
  render() {
    const {name, price, ticker, children, logo} = this.props;

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
}
