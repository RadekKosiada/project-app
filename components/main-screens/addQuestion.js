import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  TextInput
} from "react-native";

function AddQuestionScreen({ route }) {
  console.log(route.params);
  const answerTypes = route.params.answerTypeArray;
  return (
    <View
      style={{
        flex: 1,
        alignSelf: "center",
        width: Dimensions.get("window").width,
        backgroundColor: "white"
      }}
    >
      <View
        style={{
          marginTop: 20,
          marginLeft: 20,
          marginRight: 20
        }}
      >
        <Text style={{ fontSize: 18, color: "black" }}>Question</Text>
        <TextInput
          placeholder="Add a new question..."
          style={{
            backgroundColor: "lightgray",
            borderRadius: 7,
            fontSize: 20
          }}
        ></TextInput>

        <Text style={{ fontSize: 18, color: "black", marginTop: 40 }}>
          Answer Type
        </Text>
        <View
          style={{
            fontSize: 20,
            borderRadius: 10,
            backgroundColor: "lightgray"
          }}
        >
           {answerTypes.map((type, index) => {
        return (
          <Text key={index}>
            {type}
          </Text>
        )})}
        </View>
      </View>
    </View>
  );
}

export default AddQuestionScreen;
