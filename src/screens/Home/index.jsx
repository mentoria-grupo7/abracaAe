import React from "react";
import { styles } from "./style";
import { View } from "react-native";
import { CardItem } from "../../components/home/cardItem";
import { Botoes } from "../../components/home/btnFiltrar";


export const Home = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <Botoes/>
      <CardItem navigation = {navigation}/>
    </View>
  );
};
