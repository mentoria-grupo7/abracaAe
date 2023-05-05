import React from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'

export const Botoes = () => {

return(
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.botao}>
                <Text style ={{fontWeight:'bold'}}>Categoria     V</Text>
            </TouchableOpacity>
            <Text   style ={{fontWeight:'bold'}}>Mais recentes</Text>
        </View> 
)}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:"space-between",
        paddingVertical:5,
        paddingHorizontal:10
    },
    botao:{
        width:'45%',
        padding:5,
        backgroundColor:'#E0E0E0',
        borderRadius:10,
        alignItems:'center',
        fontWeight:'bold'
    }
})