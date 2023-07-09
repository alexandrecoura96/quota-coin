import {TextInput} from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background-color: #eaeaea;
  border-radius: 8px;
  padding: 0px 0px 0px 8px;
`;

export const InputText = styled(TextInput)`
  flex: 1;
  height: 40px;
  padding: 8px 16px 8px 0px;
  font-size: 16px;
  line-height: 22px;
  color: #0a0a0a;
  background-color: #eaeaea;
  border-radius: 8px;
`;
