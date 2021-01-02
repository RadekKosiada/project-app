import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Image, Button } from 'react-native';

import QuestionButton from './components/questions-button';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        color = "gray"
        style={styles.button}
        title="Go to Question"
        onPress={() =>
          navigation.navigate('QuestionButton')
        }
      />
      <StatusBar style="auto" />
    </View>

  )
}


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>

    <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "questions answered" }}
      />
    
    <Stack.Screen
          name="QuestionButton"
          component = {QuestionButton}
          options = {{ title: "QuestionButton" }}
          />

    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
