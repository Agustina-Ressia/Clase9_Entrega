import React,{useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import store from './src/app/store';
import LoginModal from './src/components/LoginModal';
import CategoriasScreen from './src/screens/CategoriasScreen';
import PersonajesScreen from './src/screens/PersonajesScreen';
import AjustesScreen from './src/screens/AjustesScreen';
import {useFonts} from 'expo-font';

const Tab = createBottomTabNavigator();


const App = () => {
    let [showLoginModal, setShowLoginModal] = useState(true);
    
    //Cargo las fuentes de la App
    const [fontsLoaded] = useFonts({'Oswald': require('./assets/fonts/Oswald-VariableFont_wght.ttf')});
    if (!fontsLoaded) 
        return null;

    const handlerShowLoginModal = ()=>{
        setShowLoginModal(true);
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Categorias" component={CategoriasScreen}/>
                    <Tab.Screen name="Personajes" component={PersonajesScreen}/>
                    <Tab.Screen name="Ajustes" component={AjustesScreen}/>
                </Tab.Navigator>
                <LoginModal visible={showLoginModal}/>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
