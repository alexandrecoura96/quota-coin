import Lottie from 'lottie-react-native';
import React from 'react';
import {Container} from './styles';

export const View = () => {
  return (
    <Container>
      <Lottie
        source={require('../../assets/lotties/splash.json')}
        autoPlay
        loop
      />
    </Container>
  );
};
