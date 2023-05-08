import { View, TextInput, ScrollView } from "react-native";
import { styles } from "./styles"
import { FlatList } from "react-native";
import { Image } from "react-native";
import { Text } from "react-native";
import { useEffect, useState } from "react";


export const Search = () =>{

    const numColumns = 1;
    const [data, setData] = useState([]);
    const [originalData, setOriginalData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((json) => {
                setOriginalData(json);
                setData(json);
            });

    }, []);

    function renderCard(item){
        return (
            <View style={styles.card}>
              <Image style={styles.image} source={item.url}/>
              <Text style={styles.subTitle}>{item.title}</Text>
            </View>
        );
    }
  

    function search(s) {
        let arr = JSON.parse(JSON.stringify(originalData));
        setData(arr.filter(d => d.title.includes(s) || d.body.includes(s)));
    }

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={(s) => search(s)}
                    style={styles.input} 
                    placeholder="O que vamos buscar?" 
                />
            </View>
            
        <FlatList
          data={data}
          renderItem={({item}) => renderCard(item)}
          keyExtractor={(item) => item.id}
          numColumns={numColumns}
          contentContainerStyle={styles.container}
        />
      
        </View>
    )
}