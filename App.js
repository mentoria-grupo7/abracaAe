import React from "react";
import { Home } from "./src/screens/Home";
import { SafeAreaView,StyleSheet,Image } from 'react-native';
import { CardItem } from "./src/Components/home/cardItem";

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
  },
});