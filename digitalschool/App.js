import 'react-native-gesture-handler';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigtor from './navigation/TabNavigator';
import DrawerNavigator from './navigation/DreawerNavigator';

export default function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

