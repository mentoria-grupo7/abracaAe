import React from "react";
import { styles } from "./style";
import { View, Text, Image, StyleSheet } from "react-native";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require("../../../assets/imagem-home/imagem2.png")} />
        <View>
          <Text>Frutas e verduras</Text>
          <Text>Precisamos de frutas e veduras para doar na região...</Text>
          <Text>06/jan - Sorocaba/SP</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require("../../../assets/imagem-home/imagem1.png")} />
        <View>
          <Text>Preparar comida</Text>
          <Text>Precisamos de pessoas para ajudar na montagem de mar..</Text>
          <Text>10/jan - Cotia/SP</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require("../../../assets/imagem-home/imagem3.png")} />
        <View>
          <Text>Roupas e cobertas</Text>
          <Text>Roupas e cobertas para distribuir para os moradores...</Text>
          <Text>02/fev - Campinas/SP</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require("../../../assets/imagem-home/imagem3.png")} />
        <View>
          <Text>Brinquedos</Text>
          <Text>
            Brinquedos para crianças de 4 a 10 anos que serão doados...
          </Text>
          <Text>17/mar - Rio de Janeiro/RJ</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Image source={require("../../../assets/imagem-home/imagem5.png")} />
        <View>
          <Text>Preparar comida</Text>
          <Text>Precisamos de pessoas para ajudar na montagem de mar...</Text>
          <Text>06/jan - Sorocaba/SP</Text>
        </View>
      </View>
    </View>
  );
};
