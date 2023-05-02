import React from "react"
import {View,Text,Image,StyleSheet} from 'react-native'


export const CardHome = (props)=>{
    return(
            <View style={styles.card}>
                    <Image  source={props.imagem}/>
                    <View style={styles.textoBox}>
                        <Text style = {{fontWeight:'bold'}}>{props.titulo}</Text>
                        <Text>{props.descricao}</Text>
                        <Text style = {{fontStyle:'italic'}}>{props.data}</Text>
                    </View>
                </View>
    
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
      }
})