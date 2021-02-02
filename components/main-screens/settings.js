import "react-native-gesture-handler";
import {
  NavigationContainer,
  CommonActions,
  useNavigation
} from "@react-navigation/native";
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
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";

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

function EditQuestions(props) {
  const navigation = useNavigation();
  return (
    <View>
      {props.questionsArray.map((item, index) => {
        return (
          <View key={index} style={{ flexDirection: "row", marginLeft: 20 }}>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons
                name="drag-handle"
                size={24}
                color="black"
                style={{ marginTop: 20, alignSelf: "center" }}
                onPress={() => console.log("Drag was pressed")}
              />
              <Text style={styles.text}>{item.question}</Text>
            </View>
            <TouchableOpacity style={{ marginTop: 20, alignSelf: "center" }}>
              <Feather
                name="edit-2"
                size={24}
                color="black"
                onPress={() =>
                  navigation.dispatch(
                    CommonActions.navigate({
                      name: item.question,
                      params: { question: item.question }
                    })
                  )
                }
              />
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

function EditQuestionScreen(props) {
  console.log("EditQuestionScreen triggered ", props.question);
  return (
    <View style={{width: Dimensions.get("window").width * 8/10, margin: 20 }}>
      <Text style={{fontSize: 20, color: "black" }}>Question</Text>
      <TextInput
        style={{ fontSize: 20, borderRadius: 10, backgroundColor: "lightgray" }}
        placeholder={props.question}
      ></TextInput>

      <Text style={{fontSize: 20, marginTop: 40, color: "black" }}>Answer Type</Text>
      {/* DROPDOWN */}

      <TouchableOpacity>
        <Text style={{fontSize: 20, color: "black", alignSelf: "center", marginTop: 40 }}>Save</Text>
      </TouchableOpacity> 
    </View>
  );
}

function CalendarPreferences() {
  return <Text>Week starts on:</Text>;
}

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

//like QuestionScreen
function SettingScreen({ route }) {
 // console.log("SettingScreen: ", route.params);
  const questionsArray = route.params.questionsArray;
  if (route.name === "Contact us") {
    return <ContactUs />;
  } else if (route.name === "Edit questions") {
    return <EditQuestions questionsArray={questionsArray} />;
  } else if (route.name === "Calendar preferences") {
    return <CalendarPreferences />;
  } else if (route.name === "Delete data") {
    return <DeleteData />;
  }
}
// Root
const SettingsStack = createStackNavigator();

function SettingsStackScreen(props) {
  const questionsArray = props.questionsArray;
  console.log("SettingsStackScreen: ", props.questionsArray);
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />

      {/* Different settings  */}
      {settingCategoriesArr.map((category, index) => {
        console.log("settings category: ", category);
        return (
          <SettingsStack.Screen
            name={category}
            key={index}
            component={SettingScreen}
            // https://stackoverflow.com/a/60700220
            initialParams={{ questionsArray: questionsArray }}
          />
        );
      })}
      {/* Edit question screen
      Another way to nest component in a stack screen */}
      {questionsArray.map((item, index) => {
        let question = item.question;
        return (
          // <SettingsStack.Screen
          //   name={question}
          //   key={index}
          //   component={EditQuestionScreen}
          //   initialParams={{ 
          //     question: question,
          //     buttonText: "Save"
          //    }}
          // />
          <SettingsStack.Screen name={question} key={index}>
            {props => (
            <EditQuestionScreen 
              question={question}
               />
            )}
          </SettingsStack.Screen>
        );
      })}
    </SettingsStack.Navigator>
  );
}

const Settings = ({ route, navigation }) => {
  // console.log('Settings: ', route)
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
    // flex: 1,
    marginTop: 20,
    color: "black",
    fontSize: 20
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
