import numeral from 'numeral';
import React, {PureComponent} from 'react';
import Coin from '../../assets/svgs/coin.svg';
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
        {logo ? <Logo source={{uri: logo}} /> : <Coin height={32} width={32} />}
        <Content>
          <PrimaryColumn>
            <Ticker>{ticker ? ticker.toUpperCase() : '--'}</Ticker>
            <Name>{name ? name : '--'}</Name>
          </PrimaryColumn>
          <SecondaryColumn>
            <Price>{price ? numeral(price).format('$0,0.00') : '--'}</Price>
            {children}
          </SecondaryColumn>
        </Content>
      </Container>
    );
  }
}
