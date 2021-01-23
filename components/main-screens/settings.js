import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
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

const Settings = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={styles.header}>Settings</Text>
      <View style={styles.subView}>
        <TouchableOpacity>
          <Text style={styles.text}>Edit questions</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text}>Calendar preferences</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text}>Delete data</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.text}>Contact us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
  }
});

export default Settings;
