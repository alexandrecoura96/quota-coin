import {RFValue} from 'react-native-responsive-fontsize';
import {styled} from 'styled-components/native';

export const Container = styled.View`
  gap: 32px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #000;
  font-size: ${RFValue(20)}px;
  font-weight: 500;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 12px 8px;
  gap: 8px;
`;

export const ButtonTitle = styled.Text`
  color: #000;
  font-size: ${RFValue(16)}px;
`;
