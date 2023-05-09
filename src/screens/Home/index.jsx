import React from "react";
import { styles } from "./style";
import { View, Image} from "react-native";
import { CardItem } from "../../Components/home/cardItem";
import { Botoes } from "../../Components/home/btnFiltrar";


export const Home = () => {
  return (
    <View style = {styles.container}>
      <Botoes/>
      <CardItem />
    </View>
  );
};
