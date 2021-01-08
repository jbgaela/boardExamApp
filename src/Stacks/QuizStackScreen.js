import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import CategoryScreen from '../Screens/CategoryScreen';
import QuizScreen from '../Screens/QuizScreen';

const QuizStackScreen = () => {
  const QuizStack = createStackNavigator();

  return (
    <QuizStack.Navigator>
      <QuizStack.Screen
        name='Category'
        component={CategoryScreen}
        options={{
          title: 'Category',
        }}
      />
      <QuizStack.Screen name='Quiz' component={QuizScreen} />
    </QuizStack.Navigator>
  );
};

export default QuizStackScreen;
