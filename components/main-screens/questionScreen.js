import React, { useState, useEffect } from "react";
import { Text, View } from "react-native"; 

// // Components
import SliderComponent from "./slider";
import OpenAnswerComponent from "./openAnswerComponent";
import TagsComponent from "./tagsComponent";

//Screen
function QuestionScreen({ route, navigation }) {
  const tagsArray = route.params.tagsArray;
  const singleAnswerArray = route.params.singleAnswerArray;

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

export default QuestionScreen;