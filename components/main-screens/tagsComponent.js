import React from "react";
import { View, TouchableOpacity, Dimensions, Text } from "react-native";
import GoToButton from "./goToButton";
import { FlatList } from "react-native-gesture-handler";

function TagsComponent(props) {
  const answersArray = props.answers;
  const addLoopButton = props.indefiniteAnswers;
  const question = props.question;
  const questionNumber = props.questionNumber;
  const allQuestionsSum = props.allQuestionsSum;
  const { width } = Dimensions.get("window");

  // <Grid>
  // Flex https://www.newline.co/30-days-of-react-native/day-05-layout-with-flexbox
  // Custom Button https://js.coach/?menu%5Bcollections%5D=React%20Native&page=1&query=button
  console.log(props);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          justifyContent: "space-around",
          alignItems: "flex-end",
          width: width
        }}
      >
        {answersArray.map((tag, index) => {
          return (
            // TouchableOpacity is easier to customize; Buttons are very limited in their customizabilty;
            <TouchableOpacity key={index}>
              <Text
                style={{
                  margin: 8,
                  backgroundColor: "lightgray",
                  borderColor: "white",
                  //borderWidth: 1,
                  borderRadius: 25,
                  // color: "white",
                  minWidth: width / 4,
                  // fontSize: 24,
                  // fontWeight: 'bold',
                  overflow: "hidden",
                  padding: 12,
                  textAlign: "center"
                }}
              >
                {tag}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {/* button to add more tags */}
      {addLoopButton ? (
        <GoToButton
          style={{ alignItems: "center" }}
          screenName="Input"
          data={{
            question,
            questionNumber,
            allQuestionsSum,
            iconName: "search",
            position: "center"
          }}
        />
      ) : null}
    </View>
  );
}

export default TagsComponent;
