import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ListingsScreen from "./app/screens/ListingsScreen";

export default function App() {
  return <ListingsScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
