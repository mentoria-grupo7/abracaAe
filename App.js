import React from "react";
import { StyleSheet, Text, SafeAreaView,Image } from "react-native";
import { Home } from "./src/screens/Home/index";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

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
    backgroundColor: '#fff',
    paddingTop: 20,
  }
});