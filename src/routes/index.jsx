import { NavigationContainer} from '@react-navigation/native';

import AutenticacaoRoutes from './autenticacao/autenticacao.routes'

export function Routes () {
    return (
        <NavigationContainer>

            <AutenticacaoRoutes />
                   
        </NavigationContainer>
    )


}