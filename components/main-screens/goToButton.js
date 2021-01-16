import React from "react";
import { NavigationContainer, CommonActions, useNavigation } from "@react-navigation/native";

// https://icons.expo.fyi/FontAwesome/search
// https://icons.expo.fyi/
// https://www.youtube.com/watch?v=C4ikFaP0a5o
import { FontAwesome } from "@expo/vector-icons";

//  go to button
//https://reactnavigation.org/docs/connecting-navigation-prop/
function GoToButton({ screenName, data }) {
  const navigation = useNavigation();
  return (
    <FontAwesome.Button
      name="search"
      backgroundColor="gray"
      size={15}
      color="black"
      title={`Go to ${screenName}`}
      onPress={() => navigation.navigate(screenName, data)}
    />
  );
}

export default GoToButton;