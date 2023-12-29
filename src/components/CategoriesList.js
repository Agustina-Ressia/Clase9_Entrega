import React from 'react';
import {FlatList, View, Text, StyleSheet} from 'react-native';
import animeCharactersData from '../data/data';

const CategoriesList = () => {
    // Obtengo la lista de categorías únicas desde los datos de personajes
    const uniqueCategories = [...new Set(animeCharactersData.map((character) => character.category))];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Categorías Disponibles</Text>
            <FlatList
                data={uniqueCategories}
                keyExtractor={(item) => item}
                renderItem={({item}) => (
                <View style={styles.categoryItem}>
                    <Text>{item}</Text>
                </View>
            )}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16
    },
    categoryItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    }
});

export default CategoriesList;
