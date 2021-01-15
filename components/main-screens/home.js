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

import Slider from "@react-native-community/slider";

// import QuestionButton from "../questions-button";

const questionsData = require("./questions.json");
const questionsArray = questionsData.questions;

//  go to button
//https://reactnavigation.org/docs/connecting-navigation-prop/
function GoToButton({ screenName }) {
  const navigation = useNavigation();

  return (
    <FontAwesome.Button
      name="search"
      backgroundColor="gray"
      size={15}
      color="black"
      title={`Go to ${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    />
  );
}

// TODO adjust the Input screen? and pass possible answers as autocomplete, but only if Loop is pressed; 
// divide into simple files;
// check if I  an use Open Answer Component as screen but so it looks like question screen

function SliderComponent() {
  const [sliderValue, setSliderValue] = useState(0);

  //https://reactnativeforyou.com/how-to-add-a-slider-component-in-react-native/
  const handleChange = sliderValue => {
    setSliderValue(sliderValue);
  };

  return (
    // https://github.com/callstack/react-native-slider
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{Math.round(sliderValue)}</Text>
      <Slider
        type="range"
        value={sliderValue}
        onValueChange={handleChange}
        style={{ width: 200, height: 40 }}
        minimumValue={1}
        maximumValue={5}
        // minimumTrackTintColor="#FFFFFF"
        // maximumTrackTintColor="#000000"
      />
    </View>
  );
}

function TagsComponent(props) {
  const answersArray = props.answers;
  const addLoopButton = props.indefiniteAnswers;


  console.log(addLoopButton);
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
      {addLoopButton ? <GoToButton screenName="Input" /> : null}
    </View>
  );
}

function OpenAnswerComponent() {
  console.log(styles.possibleAnswer);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TextInput
        //style={styles.possibleAnswer}
        style={{
          color: "white",
          backgroundColor: "white",
          borderColor: "black",
          width: 120,
          height: 250,
          borderWidth: 1,
          borderRadius: 8
        }}
      />
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
        <TagsComponent answers={tagsArray} indefiniteAnswers={true} />
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
      <HomeStack.Screen name={"Input"} component={OpenAnswerComponent} />
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
