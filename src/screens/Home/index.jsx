import React from "react";
import { styles } from "./style";
import { View, Image} from "react-native";
import { CardItem } from "../../Components/home/cardItem";
import { Botoes } from "../../Components/home/btnFiltrar";


export const Home = () => {
  return (
    <View style = {styles.container}>
      <Image style={styles.cabecalho}source={require('../../../assets/imagem-home/cabecalho.png')}/>
      <Botoes/>
      <CardItem />
      <Image style={styles.cabecalho}source={require('../../../assets/imagem-home/menu.png')}/>
    </View>
  );
};
