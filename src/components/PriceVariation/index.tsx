import numeral from 'numeral';
import React, {PureComponent} from 'react';
import ArrowDown from '../../assets/svgs/arrow_down.svg';
import ArrowUp from '../../assets/svgs/arrow_up.svg';
import {Container, Variation} from './styles';
import {PriceVariationProps} from './types';

export class PriceVariation extends PureComponent<PriceVariationProps> {
  render() {
    const {variation} = this.props;

    const Icon = () => {
      return {
        positive: <ArrowUp fill="#00CB00" height={16} width={16} />,
        negative: <ArrowDown fill="#E31B00" height={16} width={16} />,
      };
    };

    const verifyVariation = (value: number) => {
      if (value > 0) {
        return 'positive';
      } else {
        return 'negative';
      }
    };

    return (
      <Container>
        {variation && Icon()[verifyVariation(variation)]}
        <Variation type={verifyVariation(variation)}>
          {variation ? numeral(variation / 100).format('0.00%') : '--'}
        </Variation>
      </Container>
    );
  }
}
