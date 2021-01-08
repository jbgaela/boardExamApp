import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../Screens/LoginScreen';
import RegisterScreen from '../Screens/RegisterScreen';

const AuthStackScreen = () => {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator headerMode='none'>
      <AuthStack.Screen name='Login' component={LoginScreen} />
      <AuthStack.Screen name='Register' component={RegisterScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
