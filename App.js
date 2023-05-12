import React from "react";
import { SafeAreaView,StyleSheet,Image } from 'react-native';
import { StatusBar } from "expo-status-bar";
import {Routes} from './src/routes'
import { Home } from "./src/screens/Home";
import { Rota } from "./src/routes/homeToMap/rota.jsx";
import OngLocalization from "./src/screens/OngLocalization";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Rota />
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
