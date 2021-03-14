import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";

function DeleteData() {
  return (
    <View>
      <Text style={{ fontSize: 22, color: "black" }}>Delete all my data: </Text>
      <Text>This action... </Text>
      <TouchableOpacity
        style={{
          alignSelf: "center",
          width: Dimensions.get("window").width / 3,
          borderRadius: 25,
          backgroundColor: "lightgray",
          padding: 10
        }}
      >
        <Text>Yes, I want to delete.</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignSelf: "center",
          width: Dimensions.get("window").width / 3,
          borderRadius: 25,
          backgroundColor: "lightgray",
          padding: 10
        }}
      >
        <Text>No, I don't want to delete.</Text>
      </TouchableOpacity>
    </View>
  );
}

export default DeleteData;