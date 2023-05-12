import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../../screens/Home/index.jsx";
import OngLocalization from "../../screens/OngLocalization";


const {Screen,Navigator} = createNativeStackNavigator();

export const Rota =() =>{
    return(
    <NavigationContainer>
        <Navigator>
            <Screen 
                name='Home' 
                component={Home}
            />

            <Screen
                name="OngLocalization"
                component={OngLocalization}
                />

        </Navigator>
    </NavigationContainer>
)
}

