import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {
    Text, 
    TextInput, 
    TouchableOpacity, 
    View,
    Image,
    

} from 'react-native';
import {styles} from './style'
import {HeaderComponent} from '../../components/header/index'

export const Cadastro= () => {
    
    return (
        <View style={styles.container}>

            <HeaderComponent description = 'Login'
            
            />


            <Text style={styles.content}>
                Seja um Voluntário
            </Text>
            
            
            <TextInput
                    placeholder='Digite seu nome'
                    style={styles.input}
                >
            </TextInput>

            
            <TextInput
                    placeholder='Digite seu e-mail'
                    style={styles.input}
                >
            </TextInput>

            
            <TextInput
                    placeholder='Crie uma senha'
                    style={styles.input}
                >
            </TextInput>

            
            <TextInput
                    placeholder='Repita a senha acima'
                    style={styles.input}
                >
            </TextInput>
          
            <TouchableOpacity style={styles.buttonCadastro}>
                    <Text style={styles.buttonText}> Cadastrar. Seja bem vindo. </Text>               
                </TouchableOpacity>

            <View style={styles.email}>

                <Icon style={styles.icon} name="google" size={25} color='#fff' />
                <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> Entrar com a conta do Gmail </Text>               
                </TouchableOpacity>

            </View>
            <View style={styles.redesSociais}>
                <Icon style={styles.icon} name="facebook-square" size={25} color='#fff' />
                
                <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}> Entrar com a conta do Facebook </Text>               
                </TouchableOpacity>
            </View>
        </View>
     )
}