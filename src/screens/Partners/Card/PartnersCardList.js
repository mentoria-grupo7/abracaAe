import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { styles } from './styles';


const DATA = [
  { id: '1', title: 'Card 1', subTitle: 'Casa do Zézinho' },
  { id: '2', title: 'Card 2', subTitle: 'ONG dona Mária' },
  { id: '3', title: 'Card 3', subTitle: 'Casa da Joana' },
  { id: '4', title: 'Card 4', subTitle: 'Moradia Humanitaria' },
  { id: '5', title: 'Card 5', subTitle: 'Morada do SOL' },
  { id: '6', title: 'Card 6', subTitle: 'Casa Marieta' },
];

const numColumns = 2;

export const PartnersCardList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image style={styles.image} source={require('../../../../assets/cardsImg.png')}/>
      <Text style={styles.subTitle}>{item.subTitle}</Text>
    </View>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      contentContainerStyle={styles.container}
    />
  );
};