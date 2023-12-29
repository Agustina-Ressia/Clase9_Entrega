import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import CategoriesList from '../components/CategoriesList';

const CategoriasScreen = () => {
    return (
        <View>
            <Header title="Categorias" />
            <CategoriesList/>
        </View>
    );
};

export default CategoriasScreen;
