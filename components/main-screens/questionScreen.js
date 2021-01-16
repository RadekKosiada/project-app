import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";

// // Components
import SliderComponent from "./sliderComponent";
import OpenAnswerComponent from "./openAnswerComponent";
import TagsComponent from "./tagsComponent";

// Button
import GoToButton from "./goToButton";

//Screen
function QuestionScreen({ route, navigation }) {
  const tagsArray = route.params.tagsArray;
  const singleAnswerArray = route.params.singleAnswerArray;

  return (
    // main View
    <View>
        <GoToButton 
          screenName="Home" 
          data={{ iconName: "close", position: "flex-end" }} 
        />
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
            question={route.params.question}
            questionNumber={route.params.key + 1}
            allQuestionsSum={route.params.allQuestionsSum}
          />
        ) : null}
        {route.params.possibleAnswer === "open" ? (
          <OpenAnswerComponent />
        ) : null}
        {route.params.possibleAnswer === "single choice" ? (
          <TagsComponent
            answers={singleAnswerArray}
            indefiniteAnswers={false}
          />
        ) : null}
      </View>
    </View>
  );
}

export default QuestionScreen;