
import React from 'react';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login} from '../../screens/Login';
import {Cadastro} from '../../screens/Cadastro';

const { Screen , Navigator } = createNativeStackNavigator();

export default function AutenticacaoRoutes () {
    return (
        <Navigator>
            <Screen
                name = 'Login'
                options={{
                    headerShown: false,
                }}
                component = {Login}

                />

            <Screen
                name = 'Cadastro'
                options={{
                    
                }}
                component = { Cadastro }
                
                /> 

        </Navigator>

            )
        }