import "react-native-gesture-handler";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
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

import Slider from "@react-native-community/slider";

// import QuestionButton from "../questions-button";

const questionsData = require("./questions.json");
const questionsArray = questionsData.questions;

function SliderComponent() {
  return (
    <Slider
      style={{ width: 200, height: 40 }}
      minimumValue={1}
      maximumValue={5}
      // minimumTrackTintColor="#FFFFFF"
      // maximumTrackTintColor="#000000"
    />
  );
}

//Screen
function QuestionScreen({ route, navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        {route.params.key + 1} / {route.params.allQuestionsSum}{" "}
      </Text>
      <Text>{route.params.question}</Text>
      <Text>{route.params.possibleAnswer}</Text>
      {route.params.possibleAnswer=== 'scale' ? <SliderComponent /> : null }
    </View>
  );
}

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
    </HomeStack.Navigator>
  );
}

const Home = ({ navigation }) => {
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

// TODO The action 'NAVIGATE' with payload {"name":"How did you sleep last night?","params":{"key":0}} was not handled by any navigator.
// Do you have a screen named 'How did you sleep last night?'?
/* 
create component that will be dynamically created as the questions
*/

const styles = StyleSheet.create({
  questions: {
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
    textAlign: "left"
  }
});

export default HomeStackScreen;
