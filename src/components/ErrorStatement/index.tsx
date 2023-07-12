import React from 'react';
import RetryIcon from '../../assets/svgs/retry.svg';
import ErrorIcon from '../../assets/svgs/secondary_error.svg';

import {Button, ButtonTitle, Container, Title} from './styles';
import {ErrorStatementProps} from './types';

export function ErrorStatement({...props}: ErrorStatementProps) {
  return (
    <Container>
      <ErrorIcon height={200} width={200} />
      <Title>Something went wrong!</Title>
      <Button activeOpacity={0.8} {...props}>
        <ButtonTitle>Try again</ButtonTitle>
        <RetryIcon height={24} width={24} />
      </Button>
    </Container>
  );
}
