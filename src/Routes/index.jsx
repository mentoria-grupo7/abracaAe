import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';

const Stack = createNativeStackNavigator();

import {OngNavigation} from '../screens/OngLocalization';
import {Partners} from '../screens/Partners'

export  function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="OngNavigation" component={OngNavigation} />
                <Stack.Screen name="Partners" component={Partners} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}