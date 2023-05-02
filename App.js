import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView,Image } from "react-native";
import React from "react";
import { Home } from "./src/screens/Home/index";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  }
});
