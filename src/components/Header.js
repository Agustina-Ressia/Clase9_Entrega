import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useFonts} from 'expo-font';

const Header = ({title}) => {
    const [fontsLoaded] = useFonts({'Oswald': require('../../assets/fonts/Oswald-VariableFont_wght.ttf')});
    if(!fontsLoaded) return null;

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#333', // Color gris oscuro
        padding: 15,
        alignItems: 'center'
    },
    headerText: {
        color: 'white', // Color blanco
        fontFamily: 'Oswald', // Asegúrate de que este nombre coincida con el de tu fuente
        fontSize: 20
    }
});

export default Header;
