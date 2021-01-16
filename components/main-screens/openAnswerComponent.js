import { View, TextInput } from "react-native";
import React from "react";

function OpenAnswerComponent() {
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

export default OpenAnswerComponent;