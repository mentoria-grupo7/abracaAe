import { NavigationContainer} from '@react-navigation/native';
import AutenticacaoRoutes from './autenticacao/autenticacao.routes'
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { InternalRoutes } from './internal/internal.routes';

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
                    name='AutenticacaoRoutes'             
                    component={AutenticacaoRoutes}
                    
                />

                <Screen
                    name='InternalRoutes'
                    component={InternalRoutes}
                />
                
            </Navigator>

        </NavigationContainer>
    )


}