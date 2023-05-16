import React from "react"
import {View,Text,Image,StyleSheet,FlatList, TouchableOpacity} from 'react-native'

const DATA = [
    {id:'1' , titulo:'Frutas e verduras' , descricao:'Precisamos de frutas e veduras para doar na região...' , dataRegiao:'06/jan - Sorocaba/SP' , imagem: require("../../../assets/imagem-home/imagem2.png")},
    {id:'2' , titulo:'Frutas e verduras' , descricao:'Precisamos de frutas e veduras para doar na região...' , dataRegiao:'06/jan - Sorocaba/SP' , imagem: require("../../../assets/imagem-home/imagem2.png")},
    {id:'3' , titulo:'Frutas e verduras' , descricao:'Precisamos de frutas e veduras para doar na região...' , dataRegiao:'06/jan - Sorocaba/SP' , imagem: require("../../../assets/imagem-home/imagem2.png")},
    {id:'4' , titulo:'Frutas e verduras' , descricao:'Precisamos de frutas e veduras para doar na região...' , dataRegiao:'06/jan - Sorocaba/SP' , imagem: require("../../../assets/imagem-home/imagem2.png")},
    {id:'5' , titulo:'Frutas e verduras' , descricao:'Precisamos de frutas e veduras para doar na região...' , dataRegiao:'06/jan - Sorocaba/SP' , imagem: require("../../../assets/imagem-home/imagem2.png")},
    {id:'6' , titulo:'Frutas e verduras' , descricao:'Precisamos de frutas e veduras para doar na região...' , dataRegiao:'06/jan - Sorocaba/SP' , imagem: require("../../../assets/imagem-home/imagem2.png")},
    {id:'7' , titulo:'Frutas e verduras' , descricao:'Precisamos de frutas e veduras para doar na região...' , dataRegiao:'06/jan - Sorocaba/SP' , imagem: require("../../../assets/imagem-home/imagem2.png")}
];


export const CardItem = (navigation)=>{

const renderItem  = ({item}) => (
    <TouchableOpacity onPress={()=>{navigation.navigation.navigate('OngLocalization')}}>
        <View style={styles.card} >
            <Image  source={item.imagem}/>
            <View style={styles.textoBox}>
                <Text style = {{fontWeight:'bold'}}>{item.titulo}</Text>
                <Text>{item.descricao}</Text>
                <Text style = {{fontStyle:'italic'}}>{item.dataRegiao}</Text>
            </View>
        </View>
    </TouchableOpacity>
    )

    return(
        <FlatList
        data = {DATA}
        renderItem = {renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle = {styles.contentContainer}
        />
    
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        gap: 15,
        width: "100%",
        borderBottomWidth:1,
        borderColor:'#CECECE',
        paddingBottom:15
      },
      textoBox:{
        width:'70%',
        rowGap:4
      },
      contentContainer: {
        paddingHorizontal:25,
        rowGap:25,
      }
})