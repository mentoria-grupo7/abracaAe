import React from "react";
import { styles } from "./style";
import { View, Text, Image, StyleSheet } from "react-native";
import { CardHome } from "../../components/home/cardHome";

export const Home = () => {
  return (
    <View style={styles.container}>
      <CardHome 
      titulo={'Frutas e verduras'} 
      descricao = {'Precisamos de frutas e veduras para doar na região...'} 
      data ={'06/jan - Sorocaba/SP'} 
      imagem={require('../../../assets/imagem-home/imagem1.png')} />
           <CardHome 
      titulo={'Preparar comida'} 
      descricao = {'Precisamos de pessoas para ajudar na montagem de mar..'} 
      data ={'10/jan - Cotia/SP'} 
      imagem={require('../../../assets/imagem-home/imagem2.png')} />
           <CardHome 
      titulo={'Roupas e cobertas'} 
      descricao = {'Roupas e cobertas para distribuir para os moradores...'} 
      data ={'02/fev - Campinas/SP'} 
      imagem={require('../../../assets/imagem-home/imagem3.png')} />
           <CardHome 
      titulo={'Brinquedos'} 
      descricao = {'Brinquedos para crianças de 4 a 10 anos que serão doados...'} 
      data ={'17/mar - Rio de Janeiro/RJ'} 
      imagem={require('../../../assets/imagem-home/imagem3.png')} />
           <CardHome 
      titulo={'Preparar comida'} 
      descricao = {'Precisamos de pessoas para ajudar na montagem de mar...'} 
      data ={'06/jan - Sorocaba/SP'} 
      imagem={require('../../../assets/imagem-home/imagem4.png')} />
    </View>
  );
};
