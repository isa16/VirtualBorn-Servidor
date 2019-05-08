import { createStackNavigator } from 'react-navigation';
import Main from './pages/main';
import MainApp from './pages/mainApp';
import MainProf from './pages/mainProf';
import Info from './pages/info';
import Erros from './pages/Erros';
import Acertos from './pages/Acertos';
import ListProfs from './pages/listProfs';
import Cadastro from './pages/cadastro';

export default createStackNavigator({
       
    Main,
    Cadastro,
    MainApp,
    MainProf,
    ListProfs, 
    Info,
    Erros,
    Acertos,
    
}, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'rgb(135,206,250)'
            },
            headerTintColor: "#FFF"
        },
    });