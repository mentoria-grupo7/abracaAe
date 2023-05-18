import React from "react";
import { View,Text,TouchableOpacity} from "react-native";
import {styles} from './styles'

export const Cabecalho = ({navigation}) => {
    return (
        <View style={styles.cabecalho}>
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
                    <Text style={styles.texto}> Voltar</Text>               
                </TouchableOpacity>
        </View>
        
    )
}
