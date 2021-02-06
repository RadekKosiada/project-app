import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
import { SafeAreaProvider } from 'react-native-safe-area-context';

// https://reactnavigation.org/docs/tab-based-navigation/
import { Entypo,  MaterialIcons, FontAwesome, Ionicons   } from '@expo/vector-icons'; 


// main screens
import HomeStackScreen from "./components/main-screens/home";
import Calendar from "./components/main-screens/calendar";
import Stats from "./components/main-screens/stats";
import SettingsStackScreen from "./components/main-screens/settings";
import Settings from "./components/main-screens/settings";

import QuestionButton from "./components/questions-button";

// Data
const questionsData = require("./questions.json");
const questionsArray = questionsData.questions;
const answerTypeArray = questionsData["answer type"];

const Tab = createBottomTabNavigator();

// const MainMenu = ({ navigation }) => {
//   return (
//     <View>
//       <Button
//         title="Home"
//         onPress={() => navigation.navigate("Home")} />
//       <Button
//         title="Calendar"
//         onPress={() => navigation.navigate("Calendar")}
//       />
//       <Button
//         title="Stats"
//         onPress={() => navigation.navigate("Stats")}
//       />
//       <Button
//         title="Settings"
//         onPress={() => navigation.navigate("Settings")}
//       />
//     </View>
//   );
// };

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
       <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              return <Entypo name='home' size={size} color={color}  />;

            } else if (route.name === 'Settings') {
              return <MaterialIcons name="settings" size={size} color={color} />
            } else if (route.name === 'Calendar') {
              return <FontAwesome name="calendar" size={size} color={color} />
            } else if (route.name === "Stats") {
              return <Ionicons name="md-stats" size={24} color={color} />
            }            
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
     
      <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="Stats" component={Stats} />
        {/* https://reactnavigation.org/docs/hello-react-navigation/#passing-additional-props */}
        <Tab.Screen name="Settings">
          {props => <SettingsStackScreen {...props} questionsArray={questionsArray} 
          answerTypeArray={answerTypeArray}
          />}
          </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
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
