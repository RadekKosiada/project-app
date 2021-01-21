import { View, TextInput, Text, Dimensions } from "react-native";
import React from "react";

function OpenAnswerComponent() {
  var width = Dimensions.get('window').width-40; //full width
  var height = Dimensions.get('window').height; //full height
  return (
      <TextInput     
        //style={styles.possibleAnswer}
        placeholder = "Write down your thoughts..."
        style={{
          alignSelf: "center",
          color: "black",
          backgroundColor: "white",
          borderColor: "black",
          width: '80%',
          height: '50%',
          borderWidth: 1,
          borderRadius: 8
        }}
      />
  );
}

export default OpenAnswerComponent;