import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { styles } from './styles';


const DATA = [
  { id: '1', title: 'Card 1', subTitle: 'Casa do Zézinho', logo: require('../../../../assets/parteners-img/logo1.png') },
  { id: '2', title: 'Card 2', subTitle: 'ONG dona Mária', logo: require('../../../../assets/parteners-img/logo2.png') },
  { id: '3', title: 'Card 3', subTitle: 'Casa da Joana', logo: require('../../../../assets/parteners-img/logo3.png') },
  { id: '4', title: 'Card 4', subTitle: 'Moradia Humanitaria', logo: require('../../../../assets/parteners-img/logo4.png') },
  { id: '5', title: 'Card 5', subTitle: 'Morada do SOL', logo: require('../../../../assets/parteners-img/logo5.png') },
  { id: '6', title: 'Card 6', subTitle: 'Casa Marieta', logo: require('../../../../assets/parteners-img/logo6.png') },
];

const numColumns = 2;

export const PartnersCardList = () => {
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image style={styles.image} source={item.logo}/>
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