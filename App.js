import React from 'react';
import { StyleSheet, Text,StatusBar, View } from 'react-native';

import {Login} from './src/screens/Login'
import {Cadastro} from './src/screens/Cadastro'
import {Perfil} from './src/screens/Perfil'



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/*<Login></Login>*/}
      {/*<Cadastro></Cadastro>*/}
      <Perfil> </Perfil>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
