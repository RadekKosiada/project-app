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

// https://icons.expo.fyi/FontAwesome/search
// https://icons.expo.fyi/
// https://www.youtube.com/watch?v=C4ikFaP0a5o
import { FontAwesome } from "@expo/vector-icons";

import SliderComponent from "./slider";
import OpenAnswerComponent from "./openAnswerComponent";

const questionsData = require("./questions.json");
const questionsArray = questionsData.questions;

//  go to button
//https://reactnavigation.org/docs/connecting-navigation-prop/
function GoToButton({ screenName, data }) {
  const navigation = useNavigation();
  return (
    <FontAwesome.Button
      name="search"
      backgroundColor="gray"
      size={15}
      color="black"
      title={`Go to ${screenName}`}
      onPress={() => navigation.navigate(screenName, data)}
    />
  );
}

// TODO adjust the Input screen? and pass possible answers as autocomplete, but only if Loop is pressed; 
// divide into simple files;
// check if I  an use Open Answer Component as screen but so it looks like question screen



function AddTagComponent({route}) {
  console.log(route);
  const question = route.params.question;
  const questionNumber = route.params.questionNumber;
  const allQuestionsSum = route.params.allQuestionsSum;
  return (
    <View style={{ flex: 1, alignItems: "left", justifyContent: "flex-start" }}>
      <Text>{questionNumber} / {allQuestionsSum}</Text>
      <Text>{question}</Text>
      <TextInput
        placeholder = {"Add a new tag..."}
        style={{
          // color: "white",
          // backgroundColor: "white",
          borderColor: "black",
          width: 300,
          height: 50,
          borderWidth: 1,
          borderRadius: 8
        }}
      />
    </View>
  );
}

function TagsComponent(props) {
  const answersArray = props.answers;
  const addLoopButton = props.indefiniteAnswers;
  const question = props.question;
  const questionNumber = props.questionNumber;
  const allQuestionsSum = props.allQuestionsSum;


  console.log(props);
  return (
    <View style={{ flex: 1, alignItems: "stretch", justifyContent: "center" }}>
      {answersArray.map((tag, index) => {
        console.log(index, tag);
        return (
          <Button
            // style={styles.tags}
            style={{
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
            }}
            key={index}
            title={tag}
          />
        );
      })}
      {/* button to add more tags */}
      {addLoopButton ? 
        <GoToButton screenName="Input" 
          data={{question, questionNumber, allQuestionsSum}} 
        /> : null}
    </View>
  );
}

//Screen
function QuestionScreen({ route, navigation }) {
  const tagsArray = questionsData.tags;
  const singleAnswerArray = questionsData["single choice answers"];
  // console.log(singleAnswerArray);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>
        {route.params.key + 1} / {route.params.allQuestionsSum}{" "}
      </Text>
      <Text>{route.params.question}</Text>
      {/* <Text>{route.params.possibleAnswer}</Text> */}
      {route.params.possibleAnswer === "scale" ? <SliderComponent /> : null}
      {route.params.possibleAnswer === "tags" ? (
        <TagsComponent 
          answers={tagsArray} 
          indefiniteAnswers={true} 
          question = {route.params.question} 
          questionNumber = {route.params.key + 1} 
          allQuestionsSum = {route.params.allQuestionsSum}
        />
      ) : null}
      {route.params.possibleAnswer === "open" ? <OpenAnswerComponent /> : null}
      {route.params.possibleAnswer === "single choice" ? (
        <TagsComponent answers={singleAnswerArray} indefiniteAnswers={false} />
      ) : null}
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
      <HomeStack.Screen name={"Input"} component={AddTagComponent} />
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
