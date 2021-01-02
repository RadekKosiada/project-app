import "react-native-gesture-handler";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
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

const questionsData = require("./questions.json");
const questionsArray = questionsData.questions;

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
      {questionsArray.map((item, index) => {
        let question = item.question;
        return (
        <Button 
          key = {index}
          color="gray" 
          title={question} 
          onPress={() => navigation.dispatch(
            CommonActions.navigate({
              name: question,
              params: {
                key: index
              }
            })
          )}

          />)
        })
      }
    </View>
  );
};

// TODO The action 'NAVIGATE' with payload {"name":"How did you sleep last night?","params":{"key":0}} was not handled by any navigator.
// Do you have a screen named 'How did you sleep last night?'?
/* 
create component that will be dynamically created as the questions
*/


export default HomeStackScreen;
