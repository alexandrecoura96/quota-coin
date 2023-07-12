import {styled} from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
  border-bottom-width: 1px;
  border-bottom-color: lightgrey;
  padding: 16px 0px;
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex: 1;
  align-items: center;
`;

export const PrimaryColumn = styled.View`
  flex: 1;
`;

export const SecondaryColumn = styled.View`
  flex: 1;
  align-items: flex-end;
`;

export const Logo = styled.Image`
  height: 32px;
  width: 32px;
`;

export const Ticker = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-weight: 700;
  font-size: 20px;
  color: #000;
`;

export const Name = styled.Text.attrs({
  numberOfLines: 1,
})`
  color: gray;
`;

export const Price = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-weight: 500;
  font-size: 20px;
  color: #000;
`;
