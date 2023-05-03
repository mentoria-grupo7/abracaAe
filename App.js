import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import OngLocalization from './src/screens/OngLocalization';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <OngLocalization />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignContent:'center',
    // justifyContent:'center',
    // borderColor:'red'

  },
  map:{
    width:'80%',
    height:'80%',
    alignSelf:'center',
  borderColor:'red'},


});
