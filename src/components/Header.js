import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {show_modal, hide_modal, login, logout} from '../features/login/loginSlice';
import {useFonts} from 'expo-font';

const Header = ({title}) => {
    const dispatch = useDispatch();
    //console.log("REDUX", useSelector(state => state.login.auth))
    const isAuthenticated = useSelector(state => state.login.auth.isAuthenticated);
    const username = useSelector(state => state.login.auth.username);
    const [fontsLoaded] = useFonts({'Oswald': require('../../assets/fonts/Oswald-VariableFont_wght.ttf')});
    if (!fontsLoaded) 
        return null;
    
    const handleLoginPress = () => {
        if (!isAuthenticated) {
            dispatch(show_modal());
        } else {
            dispatch(logout());
        }
    };

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
            <TouchableOpacity onPress={handleLoginPress}>
                <Text style={styles.headerButton}>{isAuthenticated
                        ? 'LOG OUT'
                        : 'LOGIN'}</Text>
            {isAuthenticated && <Text style={styles.userText}>{`Usuario: ${username}`}</Text>}
            </TouchableOpacity>
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#333',
        padding: 15
    },
    headerText: {
        color: 'white',
        fontFamily: 'Oswald',
        fontSize: 20
    },
    headerButton: {
        color: 'white',
        fontFamily: 'Oswald',
        fontSize: 16,
        marginRight: 10
    },
    userText: {
        color: 'white',
        fontFamily: 'Oswald',
        fontSize: 16
    }
});

export default Header;
