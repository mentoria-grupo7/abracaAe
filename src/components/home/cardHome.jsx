import React from "react"
import {View,Text,Image} from 'react-native'
import {styles} from './cardHome-style'


export const CardHome = (props)=>{
    return(
            <View style={styles.card}>
                    <Image  source={props.imagem}/>
                    <View>
                        <Text>{props.titulo}</Text>
                        <Text>{props.descricao}</Text>
                        <Text>{props.data}</Text>
                    </View>
                </View>
    
    )
}

//../../../assets/imagem-home/imagem2.png