import React from "react";
import { styles } from "./style";
import { View, Image} from "react-native";
import {TelaRolagem} from '../../Components/home/telaRolagem'

export const Home = () => {
  return (
    <View style = {styles.container}>
      <Image style={styles.cabecalho}source={require('../../../assets/imagem-home/cabecalho.png')}/>
      <TelaRolagem />
      <Image style={styles.cabecalho}source={require('../../../assets/imagem-home/menu.png')}/>
    </View>
  );
};
