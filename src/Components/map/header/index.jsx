import React from "react";
import { View,Text,TouchableOpacity} from "react-native";
import {styles} from './styles'

export const Cabecalho = () => {
    return (
        <View style={styles.cabecalho}>
            <TouchableOpacity>
                    <Text style={styles.texto}> Voltar </Text>               
                </TouchableOpacity>
        </View>
        
    )
}
