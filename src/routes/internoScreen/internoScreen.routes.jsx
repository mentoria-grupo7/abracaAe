import React from "react";

import { Partners } from "../../screens/Partners";
import { Search } from "../../screens/Search";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen , Navigator } = createNativeStackNavigator();

export function internoScreenRoutes (){
    return (
        <Navigator>
            <Screen 
                name= 'Partners'
                component={Partners}
            />
            <Screen 
                name= 'Search'
                component={Search}
            />
        </Navigator>
    )
}