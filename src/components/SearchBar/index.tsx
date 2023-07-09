import React, {forwardRef} from 'react';
import {TextInput} from 'react-native';
import SearchIcon from '../../assets/svgs/search.svg';
import {Container, InputText} from './styles';
import {InputProps} from './types';

export const SearchBar = forwardRef(
  ({...props}: InputProps, ref: React.Ref<TextInput>) => {
    return (
      <Container>
        <SearchIcon height={24} width={24} />
        <InputText ref={ref} {...props} />
      </Container>
    );
  },
);
