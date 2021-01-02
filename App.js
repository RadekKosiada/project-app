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

// main screens
import Home from "./components/main-screens/home";
import Calendar from "./components/main-screens/calendar";
import Stats from "./components/main-screens/stats";
import Settings from "./components/main-screens/settings";

import QuestionButton from "./components/questions-button";

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
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="Stats" component={Stats} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
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
