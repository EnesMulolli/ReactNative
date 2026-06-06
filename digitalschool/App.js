import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigtor from './navigation/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigtor />
    </NavigationContainer>
  );
}


