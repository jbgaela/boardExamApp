import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../Screens/HomeScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import QuizStackScreen from '../Stacks/QuizStackScreen';

export default MainStackScreen = () => {
  const MainStack = createBottomTabNavigator();

  const tabBarOptions = {
    showLabel: true,
    activeTintColor: '#ffffff',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#7a00ff',
    },
  };

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let iconName = 'ios-home';

      switch (route.name) {
        case 'Home':
          iconName = 'ios-home';
          break;

        case 'Notification':
          iconName = 'ios-notifications';
          break;

        case 'Profile':
          iconName = 'ios-person';
          break;

        case 'Quiz':
          iconName = 'ios-book';
          break;

        default:
          iconName = 'ios-home';
      }

      return (
        <Ionicons
          name={iconName}
          size={24}
          color={focused ? '#ffffff' : '#000000'}
        />
      );
    },
  });

  const tabBarLabelOptions = {
    fontSize: 50,
  };

  return (
    <MainStack.Navigator
      tabBarOptions={tabBarOptions}
      screenOptions={screenOptions}
      tabBarLabel={tabBarLabelOptions}
    >
      <MainStack.Screen name='Home' component={HomeScreen} />
      <MainStack.Screen name='Quiz' component={QuizStackScreen} />
      <MainStack.Screen name='Notification' component={NotificationScreen} />
      <MainStack.Screen name='Profile' component={ProfileScreen} />
    </MainStack.Navigator>
  );
};
