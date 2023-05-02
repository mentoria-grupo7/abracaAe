import React from 'react';
import {
    Text, 
    TextInput, 
    TouchableOpacity, 
    View,
    Image,

} from 'react-native';

import {styles} from './style'

export const Cadastro= () => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.content}>
                Seja um Voluntário
            </Text>
            
            <Text style={styles.title}> Digite seu nome </Text>
            <TextInput
                    placeholder='Nome'
                    style={styles.input}
                >
            </TextInput>

            <Text style={styles.title}> E-mail </Text>
            <TextInput
                    placeholder='email@dominio.com.br'
                    style={styles.input}
                >
            </TextInput>

            <Text style={styles.title}> Crie sua senha </Text>
            <TextInput
                    placeholder='Senha'
                    style={styles.input}
                >
            </TextInput>

            <Text style={styles.title}> Repita sua senha </Text>
            <TextInput
                    placeholder='Senha'
                    style={styles.input}
                >
            </TextInput>

            

            <View style={styles.containerRedesSociais}>
                
                <Image
                source={require('./assets/redesSociais.png')}
                style={{width:'50%'}}
                resizeMode='contain'
                ></Image>
            </View>

            <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> Cadastrar </Text>               
                </TouchableOpacity>








        </View>
     )
}