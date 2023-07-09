import {styled} from 'styled-components/native';

interface VariationType {
  type: 'positive' | 'negative';
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

export const Variation = styled.Text<VariationType>`
  color: ${props => (props.type === 'negative' ? '#E31B00' : '#00CB00')};
`;