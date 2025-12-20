/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './src/Navigation';
import { PaperProvider } from 'react-native-paper';
import { UnleashProvider } from './src/unleash/UnleashWrapper';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <UnleashProvider>
      <PaperProvider>
        <SafeAreaProvider>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </SafeAreaProvider>
      </PaperProvider>
    </UnleashProvider>
  );
}

export default App;
