import {FlatList, TouchableWithoutFeedback} from 'react-native';

import {styled} from 'styled-components/native';

export const Touchable = styled(TouchableWithoutFeedback)`
  height: 100%;
  background-color: #fff;
`;

export const Container = styled.View`
  background-color: #ffffff;
  padding: 16px 24px;
  gap: 24px;
  align-items: center;
`;

export const StatementContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 16px 24px;
`;

export const List = styled(FlatList).attrs({
  contentContainerStyle: {
    paddingHorizontal: 24,
    paddingBottom: 60,
    backgroundColor: '#fff',
  },
})`` as typeof FlatList;

export const Title = styled.Text`
  color: #000;
  font-size: 40px;
  font-weight: bold;
`;

export const NotFounded = styled.Text`
  color: grey;
  margin: 16px 24px;
`;
