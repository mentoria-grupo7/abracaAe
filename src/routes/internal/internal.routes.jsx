import React from "react";

import { Partners } from "../../screens/Partners";
import { Search } from "../../screens/Search";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../screens/Home";
import OngLocalization from "../../screens/OngLocalization";

const { Screen , Navigator } = createNativeStackNavigator();

export function InternalRoutes (){
    return (
        <Navigator
            screenOptions={{
                headerShown: false
            }}>

            <Screen 
                name='Home' 
                component={Home}
            />

                <Screen
                name="OngLocalization"
                component={OngLocalization}
                />

            <Screen 
                name='Partners'
                component={Partners}
            />
            <Screen 
                name='Search'
                component={Search}
            />
        </Navigator>
    )
}