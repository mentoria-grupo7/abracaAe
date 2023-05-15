import React from "react";
import { SafeAreaView,StyleSheet,Image } from 'react-native';
import { StatusBar } from "expo-status-bar";
import {Routes} from './src/routes'
import { Partners } from "./src/screens/Partners";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Partners />
      {/* <Routes /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4ECDC4',
    paddingTop: 20,
  },
});
