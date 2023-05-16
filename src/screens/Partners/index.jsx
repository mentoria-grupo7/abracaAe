import React from "react";
import { View, Text, ScrollView } from "react-native";
import { styles } from "./style";
import { PartnersCardList } from "./Card/PartnersCardList";

export const Partners = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Parceiros</Text>
        <Text style={styles.subTitle}>Marcas que apoiam o projeto</Text>
      </View>

      <ScrollView>
        <View style={styles.container}>
          <PartnersCardList />
        </View>
      </ScrollView>
    </>
  );
};
