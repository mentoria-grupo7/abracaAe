import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView,Image } from "react-native";
import { Login } from "./src/screens/Login/index";
import { Routes} from './src/routes/index'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4ECDC4',
    paddingTop: 20,
  }
});
