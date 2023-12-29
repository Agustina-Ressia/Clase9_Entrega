import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import CharactersList from '../components/CharactersList';

const PersonajesScreen = () => {
    return (
        <View>
            <Header title="Personajes" />
            <CharactersList/>
        </View>
    );
};

export default PersonajesScreen;
