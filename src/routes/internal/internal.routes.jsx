import React from "react";

import { Partners } from "../../screens/Partners";
import { Search } from "../../screens/Search";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from "../../screens/Home";
import OngLocalization from "../../screens/OngLocalization";
import Icon from "react-native-vector-icons/FontAwesome";

const { Screen , Navigator } = createBottomTabNavigator();

export function InternalRoutes (){
    const myScreenOptions = ({ route }) => ({
        tabBarIcon:()=>{
            let icon = ''
            if(route.name === 'Inicio'){
                icon = 'home'
            }

            return <Icon name={icon} size={30} color="#000" />
        },
        headerShown: false
    })

    return (
        <Navigator
            screenOptions={myScreenOptions}>

            <Screen 
                name='Inicio' 
                component={Home}
            />
                <Screen
                name="OngLocalization"
                component={OngLocalization}
                />

            <Screen 
                name='Parceiros'
                component={Partners}
            />
            <Screen 
                name='Buscar'
                component={Search}
            />
        </Navigator>
    )
}