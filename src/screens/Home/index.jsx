import React from "react";
import { styles } from "./style";
import { View, Text, Image, StyleSheet,ImageBackground, ScrollView,TouchableOpacity} from "react-native";
import {TelaRolagem} from "../../components/home/telaRolagem"

export const Home = () => {
  return (
    <View style = {styles.container}>
      <Image style={styles.cabecalho}source={require('../../../assets/imagem-home/cabecalho.png')}/>
      <TelaRolagem />
      <Image style={styles.cabecalho}source={require('../../../assets/imagem-home/menu.png')}/>
    </View>
  );
};
