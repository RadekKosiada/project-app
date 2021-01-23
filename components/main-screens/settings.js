import "react-native-gesture-handler";
import { NavigationContainer, CommonActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
  Dimensions
} from "react-native";
// import { Divider } from 'react-native-elements';
import { AntDesign } from "@expo/vector-icons";

const questionsData = require("./questions.json");
const settingCategoriesArr = questionsData.settingsCategories;

// const SettingsButton = props => {
//   return (
//     <TouchableOpacity style={styles.button}>
//       <Text
//         style={styles.buttonText}
//       >
//         {props.text}
//       </Text>
//       <AntDesign
//         size={20}
//         color="black"
//         style={styles.buttonIcon}
//         name="right"
//       />
//     </TouchableOpacity>
//   );
// };

function ContactUs() {
  return (
    <View>
      <Text>We are a small, non profit team working... </Text>
      <Text>Do you have any questions?</Text>
      <Text>Subject: </Text>
      <TextInput></TextInput>
      <Text>Message: </Text>
      <TextInput></TextInput>
    </View>
  );
}

function EditQuestions() {
  return (
    <TouchableOpacity>
      <Text>Questions</Text>
    </TouchableOpacity>
  );
}

function CalendarPreferences() {
  return (
      <Text>Week starts on:</Text>
  )
}

function DeleteData () {
  return (
    <View >
  <Text style={{fontSize: 22, color: 'black' }}>Delete all my data: </Text>
  <Text>This action... </Text>
  <TouchableOpacity style={{alignSelf: "center", width: Dimensions.get("window").width/3,  borderRadius: 25, backgroundColor: 'lightgray', padding: 10, }} >
   <Text>Yes, I want to delete.</Text>
   </TouchableOpacity>

   <TouchableOpacity style={{alignSelf: "center", width: Dimensions.get("window").width/3,  borderRadius: 25, backgroundColor: 'lightgray', padding: 10, }}>
   <Text>No, I don't want to delete.</Text>
   </TouchableOpacity>
  </View>
  
  )
}

//like QuestionScreen
function SettingScreen({ route, navigation }) {
  console.log("SettingScreen: ", route.name);
  if (route.name === "Contact us") {
    return <ContactUs />;
  } else if (route.name === "Edit questions") {
    return <EditQuestions />
  } else if (route.name === "Calendar preferences") {
    return <CalendarPreferences />
  } else if (route.name === "Delete data") {
    return <DeleteData />
  }
}
// Root
const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />

      {settingCategoriesArr.map((category, index) => {
        return (
          <SettingsStack.Screen
            name={category}
            key={index}
            component={SettingScreen}
          />
        );
      })}
    </SettingsStack.Navigator>
  );
}

const Settings = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      {/* <Text style={styles.header}>Settings</Text> */}
      <View style={styles.subView}>
        {settingCategoriesArr.map((category, index) => {
          return (
            <TouchableOpacity key={index} style={styles.button}>
              <Text
                style={styles.buttonText}
                onPress={() =>
                  navigation.dispatch(
                    CommonActions.navigate({
                      name: category,
                      params: {}
                    })
                  )
                }
              >
                {category}
              </Text>
              <AntDesign
                size={20}
                color="black"
                style={styles.buttonIcon}
                name="right"
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    width: Dimensions.get("window").width
  },
  header: {
    color: "black",
    fontSize: 22,
    marginTop: 30
  },
  subView: {
    marginTop: 60,
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "flex-start"
  },
  text: {
    marginLeft: 30,
    marginTop: 20,
    color: "black",
    fontSize: 22
  },
  buttonText: {
    alignSelf: "flex-start",
    marginLeft: 30,
    marginTop: 20,
    color: "black",
    fontSize: 22
  },
  buttonIcon: {
    alignSelf: "flex-end",
    //position of this arrow needs adjustment
    margin: 3
  }
});

export default SettingsStackScreen;
