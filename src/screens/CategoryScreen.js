import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const CategoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Category Screen</Text>
      <Button title='hello' onPress={() => navigation.navigate('Quiz')} />
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

export default CategoryScreen;
