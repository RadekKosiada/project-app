import {
  Text,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";

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

export default ContactUs;