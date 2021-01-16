import React from "react";
import { View, Button } from "react-native";
import GoToButton from "./goToButton";

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

export default TagsComponent;