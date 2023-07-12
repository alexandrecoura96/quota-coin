import {styled} from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  gap: 16px;
  position: relative;
`;

export const Title = styled.Text`
  font-weight: 400;
  color: gray;
  position: absolute;
  bottom: 24px;
`;
