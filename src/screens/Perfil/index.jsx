import React from 'react';
import {
    Text, 
    TextInput, 
    TouchableOpacity, 
    View,
    Image,

} from 'react-native';

import {styles} from './style'

export const Perfil = () => {
    return (
        <View style = {styles.container}>
        <View style = {styles.containerArrow}>
            <Image
            style={styles.arrow}
            source={require('./assets/seta.png')}
            
            >                
            </Image>
        </View>
        <View style = {styles.fotoPerfil}>
        
            <Image
            source={require('./assets/fotoPerfil.png')}
            resizeMode='contain'
            >
            </Image>
            <Text style = {styles.userName}>
                User Name
            </Text>
        </View>

        <View style = {styles.content}>
            <TouchableOpacity style={styles.indica}>
                <Text style={styles.buttonIndica}> Indique e ganhe brindes</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> Meus endereços</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> Meus cartões</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> Meus cupons</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> Fale conosco</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> Sair</Text>
            </TouchableOpacity><TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}> Fale conosco</Text>
            </TouchableOpacity>



        </View>
        
    </View>
    )
}