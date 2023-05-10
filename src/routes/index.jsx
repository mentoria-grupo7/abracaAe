import { NavigationContainer} from '@react-navigation/native';
import AutenticacaoRoutes from './autenticacao/autenticacao.routes'
import { createNativeStackNavigator} from '@react-navigation/native-stack';

const { Screen , Navigator } = createNativeStackNavigator();


export function Routes () {
    return (
        <NavigationContainer>

            <Navigator 
                screenOptions={{
                    headerShown: false
                }}
            >
                <Screen
                    name= 'AutenticacaoRoutes'             
                    component={AutenticacaoRoutes}
                    
                />
                
            </Navigator>


            
                   
        </NavigationContainer>
    )


}