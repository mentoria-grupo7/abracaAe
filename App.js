import React from "react";
import { SafeAreaView,StyleSheet,Image } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Routes } from './src/routes'


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
       <Routes />
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
