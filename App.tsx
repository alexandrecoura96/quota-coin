import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {DataProvider} from './src/components/DataProvider/View';
import {StackRoutes} from './src/routes/stack.routes';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <NavigationContainer>
        <DataProvider>
          <StackRoutes />
        </DataProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
