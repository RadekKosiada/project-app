import React from "react";
import { View, Button, ButtonView, Dimensions } from "react-native";
import GoToButton from "./goToButton";
import { FlatList } from "react-native-gesture-handler";

function TagsComponent(props) {
  const answersArray = props.answers;
  const addLoopButton = props.indefiniteAnswers;
  const question = props.question;
  const questionNumber = props.questionNumber;
  const allQuestionsSum = props.allQuestionsSum;
  const { width } = Dimensions.get('window');

  // <Grid>
  // Flex https://www.newline.co/30-days-of-react-native/day-05-layout-with-flexbox

  console.log(props);
  return (
    <View>
    <View style={{
          flexDirection: "row",
          flexWrap: "wrap",
          flex: 1,
          justifyContent: "space-around",
          alignItems: "flex-end",
          width: width,
        }}>

      {answersArray.map((tag, index) => {      
          return (
            <Button
              // style={styles.tags}
              style={{
                backgroundColor: "gray",
                //marginTop: 8,
                borderColor: "white",
                //borderWidth: 1,
                borderRadius: 8,
                color: "white",
                width: width/6,
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
     </View>
      {/* button to add more tags */}
      {addLoopButton ? 
       
        <GoToButton 
          style={{ alignItems: "center" }} 
          screenName="Input" 
          data={{
            question, questionNumber, allQuestionsSum, iconName:"search",
            position: "center"
          }} 
        />
         : null}
        
    </View>
  );
}

export default TagsComponent;