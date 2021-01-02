import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, ScrollView, View, TextInput, Image, Button } from "react-native";

// main screens
import Home from "./components/main-screens/home";
import Calendar from "./components/main-screens/calendar";
import Stats from "./components/main-screens/stats";
import Settings from "./components/main-screens/settings";

import QuestionButton from "./components/questions-button";

const Stack = createStackNavigator();

const MainMenu = ({ navigation }) => {
  return (
    <View>
      <Button 
        title="Home" 
        onPress={() => navigation.navigate("Home")} />
      <Button
        title="Calendar"
        onPress={() => navigation.navigate("Calendar")}
      />
      <Button
        title="Stats"
        onPress={() => navigation.navigate("Stats")}
      />
      <Button
        title="Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainMenu"
          component={MainMenu}
          options={{ title: "" }}
        />

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Calendar"
          component={Calendar}
          options={{ title: "Calendar" }}
        />
        <Stack.Screen
          name="Stats"
          component={Stats}
          options={{ title: "Stats" }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ title: "Settings" }}
        />



        {/* <Stack.Screen
          name="QuestionButton 1"
          component={QuestionButton}
          options={{ title: "QuestionButton 1" }}
        />

        <Stack.Screen
          name="QuestionButton 2"
          component={QuestionButton}
          options={{ title: "QuestionButton 2" }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
