import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
//import { Home } from "./src/screens/Home/index";
import { Search } from "./src/screens/Search";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Search/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  map:{
    width:'80%',
    height:'80%',
    alignSelf:'center',
    borderColor:'red'
  },


});
