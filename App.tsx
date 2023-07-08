import {NavigationContainer} from '@react-navigation/native';
import {StackRoutes} from './src/routes/stack.routes';

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
