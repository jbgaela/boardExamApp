import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const QuizScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Quiz Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QuizScreen;
