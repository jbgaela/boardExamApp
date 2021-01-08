import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MainStackScreen from '../Stacks/MainStackScreen'
import AuthStackScreen from '../Stacks/AuthStackScreen'
import QuizStackScreen from '../Stacks/QuizStackScreen'
import LoadingScreen from '../Screens/LoadingScreen'

export default function AppStackScreen() {
  const AppStack = createStackNavigator()

  return (
    <AppStack.Navigator headerMode="none" initialRouteName="Auth">
      <AppStack.Screen name="Main" component={MainStackScreen} />
      <AppStack.Screen name="Auth" component={AuthStackScreen} />
      <AppStack.Screen name="Quiz" component={QuizStackScreen} />
      <AppStack.Screen name="Loading" component={LoadingScreen} />
    </AppStack.Navigator>
  )
}
