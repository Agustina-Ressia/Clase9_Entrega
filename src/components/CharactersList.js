import React, {useState} from 'react';
import {FlatList, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import animeCharactersData from '../data/data';

const CharactersList = () => {
    const [selectedCategory,
        setSelectedCategory] = useState(null);
    const [selectedAnime,
        setSelectedAnime] = useState(null);

    // Obtengo la lista de personajes basada en los filtros seleccionados
    const filteredCharacters = animeCharactersData.filter((character) => {
        const categoryMatch = selectedCategory
            ? character.category === selectedCategory
            : true;
        const animeMatch = selectedAnime
            ? character.anime === selectedAnime
            : true;
        return categoryMatch && animeMatch;
    });

    // Obtengo las categorías únicas y animes únicos para los filtros
    const uniqueCategories = [...new Set(animeCharactersData.map((character) => character.category))];
    const uniqueAnimes = [...new Set(animeCharactersData.map((character) => character.anime))];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Listado de Personajes</Text>

            {/* Filtros */}
            <View style={styles.filters}>
                <Text style={styles.filterLabel}>Filtrar por Categoría:</Text>
                <FlatList
                    horizontal
                    data={uniqueCategories}
                    keyExtractor={(item) => item}
                    renderItem={({item}) => (
                    <TouchableOpacity
                        style={[
                        styles.filterButton, {
                            backgroundColor: selectedCategory === item
                                ? '#3498db'
                                : '#ddd'
                        }
                    ]}
                        onPress={() => setSelectedCategory(selectedCategory === item
                        ? null
                        : item)}>
                        <Text
                            style={{
                            color: selectedCategory === item
                                ? 'white'
                                : 'black'
                        }}>{item}</Text>
                    </TouchableOpacity>
                )}/>

                <Text
                    style={[
                    styles.filterLabel, {
                        marginTop: 10
                    }
                ]}>Filtrar por Anime:</Text>
                <FlatList
                    horizontal
                    data={uniqueAnimes}
                    keyExtractor={(item) => item}
                    renderItem={({item}) => (
                    <TouchableOpacity
                        style={[
                        styles.filterButton, {
                            backgroundColor: selectedAnime === item
                                ? '#3498db'
                                : '#ddd'
                        }
                    ]}
                        onPress={() => setSelectedAnime(selectedAnime === item
                        ? null
                        : item)}>
                        <Text
                            style={{
                            color: selectedAnime === item
                                ? 'white'
                                : 'black'
                        }}>{item}</Text>
                    </TouchableOpacity>
                )}/>
            </View>

            {/* Lista de Personajes */}
            <FlatList
                data={filteredCharacters}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => (
                <View style={styles.characterItem}>
                    <Text style={styles.characterName}>{item.name}</Text>
                    <Text style={styles.characterDetails}>{`${item.anime} - ${item.category}`}</Text>
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
    filters: {
        marginBottom: 20
    },
    filterLabel: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    filterButton: {
        padding: 8,
        margin: 8,
        borderRadius: 8
    },
    characterItem: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    characterName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    characterDetails: {
        fontSize: 14,
        color: '#777'
    }
});

export default CharactersList;
