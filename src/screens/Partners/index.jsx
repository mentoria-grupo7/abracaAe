import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { styles } from "./style";
import { PartnersCardList } from "./Card/PartnersCardList";

export const Partners = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Parceiros</Text>
        <Text style={styles.subTitle}>Marcas que apoiam o projeto</Text>
      </View>

      <View style={styles.container}>
        <PartnersCardList />
      </View>
    </>
  );
};
