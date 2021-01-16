import "react-native-gesture-handler";
import { NavigationContainer, CommonActions, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  Image,
  Button
} from "react-native";
// https://reactnativeelements.com/docs/button
// import { Icon } from 'react-native-elements'

//Screens 
import QuestionScreen from "./questionScreen";
import AddTagScreen from "./addTagScreen";

// Data
const questionsData = require("./questions.json");
const questionsArray = questionsData.questions;


// TODO adjust the Input screen? and pass possible answers as autocomplete, but only if Loop is pressed; 
// divide into simple files;
// check if I  an use Open Answer Component as screen but so it looks like question screen

// arrows to move between questions? either arros or swipe!
// close button to all question components

// Root
const HomeStack = createStackNavigator();

function HomeStackScreen() {
 
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />

      {questionsArray.map((item, index) => {
        let question = item.question;
        return (
          <HomeStack.Screen
            name={question}
            key={index}
            component={QuestionScreen}
          />
        );
      })}
      <HomeStack.Screen name={"Input"} component={AddTagScreen} />
    </HomeStack.Navigator>
  );
}

const Home = ({ navigation }) => {
  const tagsArray = questionsData.tags;
  const singleAnswerArray = questionsData["single choice answers"];
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {questionsArray.map((item, index) => {
        let question = item.question;
        console.log(item);
        return (
          <TouchableOpacity key={index}>
            <Text
              style={styles.questions}
              key={index}
              onPress={() =>
                navigation.dispatch(
                  CommonActions.navigate({
                    name: question,
                    params: {
                      tagsArray,
                      singleAnswerArray,
                      key: index,
                      question: question,
                      allQuestionsSum: questionsArray.length,
                      possibleAnswer: item["possible answer"]
                    }
                  })
                )
              }
            >
              {question}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};


const styles = StyleSheet.create({
  questions: {
    backgroundColor: "lightgray",
    margin: 8,
    borderColor: "white",
    //borderWidth: 1,
    borderRadius: 25,
    // color: "white",
    width: "100%",
    // fontSize: 24,
    // fontWeight: 'bold',
    overflow: "hidden",
    padding: 12,
    textAlign: "left"
  },
  tags: {
    backgroundColor: "gray",
    margin: 8,
    borderColor: "white",
    //borderWidth: 1,
    borderRadius: 8,
    color: "white",
    width: "100%",
    // fontSize: 24,
    // fontWeight: 'bold',
    overflow: "hidden",
    padding: 12,
    textAlign: "center"
  },
  openAnswer: {
    backgroundColor: "white",
    // margin: 8,
    borderColor: "gray",
    //borderWidth: 1,
    borderRadius: 8,
    color: "white",
    height: "100%",
    width: "100%",
    // fontSize: 24,
    // fontWeight: 'bold',
    overflow: "hidden",
    padding: 12,
    textAlign: "center"
  }
});

export default HomeStackScreen;
