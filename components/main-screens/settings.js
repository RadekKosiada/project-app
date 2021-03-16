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
  Dimensions,
  Picker
} from "react-native";

import { useDispatch, useSelector } from 'react-redux';
import { deleteQuestion } from "./actions/questions";

import { ListItem, Icon } from "react-native-elements";
import { AntDesign, Feather, MaterialIcons } from "@expo/vector-icons";

// Button
import GoToButton from "./goToButton";
import ContactUs from "./contactUs";
import DeleteData from "./deleteData";
import AddQuestionScreen from "./addQuestion";

const questionsData = require("./questions.json");
const settingCategoriesArr = questionsData.settingsCategories;

function EditQuestions(props) {
  console.log("EditQuestions", props);
  const navigation = useNavigation();
  // const allQuestions = props.questionsArray;

  const questionsArray = useSelector(state => state.questionReducer.questionsList);

  console.log('allQuestions o0o0o0o0o', questionsArray);
  return (
    <View>
      {questionsArray.map((item, index) => {
        return (
          <View
            key={index}
            style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}
          >
            <ListItem key={index} bottomDivider>
              <Icon
                name="drag-handle"
                type="material-icons"
                onPress={() => console.log("Drag was pressed")}
              />
              <ListItem.Content>
                <ListItem.Title>{item.question}</ListItem.Title>
              </ListItem.Content>
              <Icon
                name="edit-2"
                type="feather"
                onPress={() =>
                  navigation.dispatch(
                    CommonActions.navigate({
                      name: item.question,
                      params: { question: item.question }
                    })
                  )
                }
              />
            </ListItem>
          </View>
        );
      })}

      <View style={{ flex: 1, alignSelf: "center", marginTop: 10 }}>
        <Icon
          reverse
          name="plus"
          type="antdesign"
          color="white"
          reverseColor="black"
          onPress={() =>
            navigation.dispatch(
              CommonActions.navigate({
                name: "Add a Question",
                params: {
                  testAddQuestion: "1234",
                  answerTypeArray: props.answerTypeArray
                }
              })
            )
          }
        />
      </View>
    </View>
  );
}

function EditQuestionScreen(props) {
  const navigation = useNavigation();
  console.log("EditQuestionScreen triggered +++++++", props.newQuestion);
  const answerTypes = props.answerTypeArray;

  return (
    <View
      style={{
        flex: 1,
        alignSelf: "center",
        width: (Dimensions.get("window").width * 9) / 10,
        marginTop: 20
      }}
    >
      {/* OVERLAY */}
      {props.isNotVisible ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            left: -30,
            top: -20,
            width: "120%",
            height: "120%",
            backgroundColor: "white",
            opacity: 0.7,
            zIndex: 2
          }}
        >
          <View
            style={{
              position: "absolute",
              top: 180,
              flex: 1,
              alignContent: "flex-start"
            }}
          >
            <Icon
              name={props.isNotVisible ? "eye-off" : "eye"}
              type="feather"
              color="black"
              size={60}
            />
            <Text
              style={{
                color: "black",
                fontSize: 25
              }}
            >
              Question hidden
            </Text>
          </View>
        </View>
      ) : null}

      {/* EDITING PART */}
      <Text style={{ fontSize: 20, color: "black" }}>Question</Text>
      <TextInput
        style={{
          fontSize: 20,
          borderRadius: 10,
          backgroundColor: "lightgray"
        }}
        placeholder={props.question}
      ></TextInput>

      <Text style={{ fontSize: 20, marginTop: 40, color: "black" }}>
        Answer Type
      </Text>

      <View style={styles.picker}>
        <Picker>
          {answerTypes.map((type, index) => (
            <Picker.Item key={index} value={type} label={type} />
          ))}
        </Picker>
      </View>

      <Text style={{ fontSize: 20, color: "black" }}>Where 1 is</Text>
      <TextInput
        style={{
          fontSize: 20,
          borderRadius: 10,
          backgroundColor: "lightgray"
        }}
        placeholder="Tossing and turning"
      ></TextInput>

      <Text style={{ fontSize: 20, color: "black" }}>... and 5 is</Text>
      <TextInput
        style={{
          fontSize: 20,
          borderRadius: 10,
          backgroundColor: "lightgray"
        }}
        placeholder="Like a baby"
      ></TextInput>

      <TouchableOpacity
        onPress={() =>
          navigation.dispatch(
            CommonActions.navigate({
              name: "Edit questions",
              params: {}
            })
          )
        }
        style={{
          zIndex: 3
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: "black",
            alignSelf: "center",
            marginTop: 40,
            borderRadius: 20,
            backgroundColor: "lightgray",
            padding: 10
          }}
        >
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function CalendarPreferences() {
  return <Text>Week starts on:</Text>;
}

//like QuestionScreen
function SettingScreen({ route }) {
  console.log("SettingScreen !!!!!!!!: ", route.params);
  const questionsArray = route.params.questionsArray;
  const answerTypeArray = route.params.answerTypeArray;
  // const newQuestion = route.params.newQuestion;
  if (route.name === "Contact us") {
    return <ContactUs />;
  } else if (route.name === "Edit questions") {
    return (
      <EditQuestions
        questionsArray={questionsArray}
        answerTypeArray={answerTypeArray}
        // newQuestion={newQuestion}
      />
    );
  } else if (route.name === "Calendar preferences") {
    return <CalendarPreferences />;
  } else if (route.name === "Delete data") {
    return <DeleteData />;
  }
}

// Root
const SettingsStack = createStackNavigator();

function SettingsStackScreen(props) {
  // const questionsArray = props.questionsArray;
  const answerTypeArray = props.answerTypeArray;
  const [isNotVisible, setVisible] = useState(true);
  const handleToggle = () => {
    setVisible(!isNotVisible);
    console.log("isNotVisible", isNotVisible);
  };
  
  const questionsArray = useSelector(state => state.questionReducer.questionsList);
 
  console.log("SettingsStackScree*****: ", questionsArray);
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />

      {/* Different settings  */}
      {settingCategoriesArr.map((category, index) => {
        // console.log("settings category: ", category);
        return (
          <SettingsStack.Screen
            name={category}
            key={index}
            component={SettingScreen}
            // https://stackoverflow.com/a/60700220
            initialParams={{
              questionsArray: questionsArray,
              answerTypeArray: answerTypeArray
            }}
          />
        );
      })}
      {/* Edit question screen
      Another way to nest component in a stack screen */}
      {questionsArray.map((item, index) => {
        let question = item.question;
        let questionVisible = item.visible;
        let isNotVisible = !questionVisible;
        return (
          <SettingsStack.Screen
            name={question}
            key={index}
            initialParams={{ isNotVisible: isNotVisible }}
            options={{
              headerTitleStyle: { alignSelf: "center", marginRight: 20 },
              headerTitle: "Edit Question",
              headerRight: () => (
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Icon
                    reverse
                    // if visible than black; if NOT visible than red;
                    name={questionVisible ? "eye-off" : "eye"}
                    type="feather"
                    color="white"
                    reverseColor="black"
                    onPress={handleToggle}
                  />
                  <Icon
                    reverse
                    name="trash"
                    type="feather"
                    color="white"
                    reverseColor="black"
                    onPress={() => console.log("Trash was pressed")}
                  />
                </View>
              )
            }}
          >
            {props => (
              <EditQuestionScreen
                isNotVisible={isNotVisible}
                question={question}
                questionsArray={questionsArray}
                answerTypeArray={answerTypeArray}
              />
            )}
          </SettingsStack.Screen>
        );
      })}
      <SettingsStack.Screen
        name={"Add a Question"}
        component={AddQuestionScreen}
      />
    </SettingsStack.Navigator>
  );
}

// Settings screen
const Settings = ({ route, navigation }) => {
  // console.log('Settings: ', route)
  return (
    <View>
      {settingCategoriesArr.map((category, index) => {
        return (
          <ListItem
            style={{ marginLeft: 20, marginRight: 20, marginTop: 10 }}
            key={index}
            bottomDivider
            onPress={() =>
              navigation.dispatch(
                CommonActions.navigate({
                  name: category,
                  params: {}
                })
              )
            }
          >
            <ListItem.Content>
              <ListItem.Title>{category}</ListItem.Title>
            </ListItem.Content>
            <Icon name="right" type="antdesign" />
          </ListItem>
        );
      })}
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
  },
  picker: {
    fontSize: 20,
    borderRadius: 10,
    backgroundColor: "lightgray"
    // height: 200,
    // width: "80%",
    // backgroundColor: "white"
  }
});

const mapStateToProps = state => {
  console.log('mapStateToProps', state);
  return {
    questions: state.questionReducer.questionsList
  };
};

const mapDispatchToProps = dispatch => {
  console.log('mapDispatchToProps', state);
  return {
    delete: (id) => dispatch(deleteQuestion(id))
  };
};

// export default connect(mapStateToProps, mapDispatchToProps)(SettingsStackScreen);

export default SettingsStackScreen;
