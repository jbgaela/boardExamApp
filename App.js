import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppStackScreen from './src/Stacks/AppStackScreen';

export default function App() {
  return (
    <NavigationContainer>
      <AppStackScreen />
    </NavigationContainer>
  );
}
