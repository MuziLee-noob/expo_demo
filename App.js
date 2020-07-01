import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Switch,
} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ImagePickerExample from "./app/screens/ImageTest";
import ListEditingScreen from "./app/screens/ListEditingScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

export default function App() {
  return <ListEditingScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
