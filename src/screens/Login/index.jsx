import React from 'react';
import {
    Text, 
    TextInput, 
    TouchableOpacity, 
    View,
    Image,

} from 'react-native';

import {styles} from './style'

export const Login = () =>{
    return(
        <View style={styles.container} >
            <View style={styles.containerLogo}>
               <Image
               source={require('./assets/logo.png')}
               style={{width:'100%'}}
               resizeMode='contain'
               ></Image>
            </View>

            <View style={styles.containerAcesso}>
                <Text style={styles.title}> Email </Text>
                <TextInput
                    placeholder='Digite seu e-mail'
                    style={styles.input}
                >
                </TextInput>

                <Text style={styles.title}> Senha </Text>
                <TextInput
                    placeholder='Digite sua senha'
                    style={styles.input}
                >
                </TextInput>

                
                <Text style={styles.textForget}>Esqueceu a senha?</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> Acessar </Text>               
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}> Cadastre-se</Text>
                </TouchableOpacity>                

            </View>

            {/*<View style={styles.containerRedesSociais}>
                <Image
                source={require('./assets/redesSociais.png')}
                style={{width:'50%'}}
                resizeMode='contain'
                ></Image>
            </View>*/}

        </View>

    )
    
}