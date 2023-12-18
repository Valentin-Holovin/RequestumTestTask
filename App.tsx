import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { RootNavigation } from './src/navigation/RootNavigation';
import { isIOS } from './src/helpers';
import { Colors } from './src/themeProvider';

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: Colors.gray01
  },
});

const App = () => {
  return (
    <GestureHandlerRootView style={styles.layout}>
      <SafeAreaProvider>
        <StatusBar barStyle={isIOS ? 'dark-content' : 'light-content'} backgroundColor={Colors.black} />
        <RootNavigation />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;