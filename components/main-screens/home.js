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



const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      
      {/* <Button
        color="gray"
        
        title="Go to Question 1"
        onPress={() => navigation.navigate("QuestionButton 1")}
      />

      <Button
        color="gray"
       
        title="Go to Question 2"
        onPress={() => navigation.navigate("QuestionButton 2")}
      />
      <StatusBar style="auto" /> */}
    </View>
  );
};

export default Home;