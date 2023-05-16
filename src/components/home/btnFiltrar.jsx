import React, { useState } from 'react'
import {Text,TouchableOpacity,StyleSheet, Modal} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Categorias } from './categorias.jsx';



export const Botoes = () => {
    const [modalVisivle,setModalVisible] = useState(false)

return(
        <SafeAreaView style = {styles.container} >
            <TouchableOpacity    onPress={()=>{setModalVisible(true)}} style = {styles.botao}>
                <Text style ={{fontWeight:'bold'}}>Categorias</Text>
                <AntDesign name="downcircleo" size={25} color="black" />
            </TouchableOpacity>
            <Modal 
                visible={modalVisivle}
                onRequestClose = {()=>{setModalVisible(false)}}
                transparent = {true}
                >
                <Categorias />
            </Modal>
            <TouchableOpacity>
                <Text   style ={{fontWeight:'bold'}}>Mais recentes</Text>
            </TouchableOpacity>
        </ SafeAreaView> 
)}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:"space-between",
        paddingVertical:15,
        paddingHorizontal:10,
        alignItems:'center'
    },
    botao:{
        width:'45%',
        padding:5,
        backgroundColor:'#E0E0E0',
        borderRadius:10,
        alignItems:'center',
        fontWeight:'bold',
        flexDirection:'row',
        justifyContent:'space-around',
    }
})