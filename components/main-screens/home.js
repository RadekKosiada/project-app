import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  Image,
  Button
} from "react-native";

import QuestionButton from "../questions-button";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Question 1" component={QuestionButton} />
      <HomeStack.Screen name="Question 2" component={QuestionButton} />
    </HomeStack.Navigator>
  );
}

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        color = "gray"
        title="Question 1"
        onPress={() => navigation.navigate("Question 1")}
      />

      <Button
        color = "gray"
        title="Question 2"
        onPress={() => navigation.navigate("Question 2")}
      />
    </View>
  );
};

export default HomeStackScreen;
