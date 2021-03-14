import React, { useState, useEffect } from "react";
import { Text, View, TextInput } from "react-native";

function AddTagScreen({route}) {
  console.log(route);
  const question = route.params.question;
  const questionNumber = route.params.questionNumber;
  const allQuestionsSum = route.params.allQuestionsSum;
  return (
    <View>
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

export default AddTagScreen;