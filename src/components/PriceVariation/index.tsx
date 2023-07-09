import React from 'react';
import ArrowDown from '../../assets/svgs/arrow_down.svg';
import ArrowUp from '../../assets/svgs/arrow_up.svg';
import {Container, Variation} from './styles';
import {PriceVariationProps} from './types';

const Icon = () => {
  return {
    positive: <ArrowUp fill="#00CB00" height={16} width={16} />,
    negative: <ArrowDown fill="#E31B00" height={16} width={16} />,
  };
};

export function PriceVariation({variation}: PriceVariationProps) {
  const verifyVariation = (value: number) => {
    if (value > 0) {
      return 'positive';
    } else {
      return 'negative';
    }
  };
  return (
    <Container>
      {Icon()[verifyVariation(variation)]}
      <Variation type={verifyVariation(variation)}>{variation}</Variation>
    </Container>
  );
}