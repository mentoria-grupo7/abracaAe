import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './style';
import { useNavigation } from '@react-navigation/native';


export const HeaderComponent = ( {description} ) => {
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> {
                console.log ('voltar')
                navigation.pop()
            } }>

             <Icon style={styles.returnIcon} 
                    name='left' 
                    size={25} 
                    color= '#698499' />
            </TouchableOpacity>

            <Text style = {styles.description}> { description } </Text>
            
        </View>
    )
}
