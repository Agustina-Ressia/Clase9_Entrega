import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {
    View,
    Text,
    TextInput,
    Button,
    Modal,
    StyleSheet
} from 'react-native';
import {show_modal, hide_modal, login, logout} from '../features/login/loginSlice';

const LoginModal = ({visible, setVisible}) => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let [loginVisible, setLoginVisible] = useState(visible);
    console.log("LoginModal", loginVisible)

    const handleLogin = () => {
        //lógica de autenticación
        dispatch(login(username));
        dispatch(hide_modal());
        setLoginVisible(false);
        console.log("handleLogin", loginVisible)
    };

    const handleClose = () => {
        dispatch(hide_modal());
        setLoginVisible(false);
        console.log("handleClose", loginVisible)
    };

    
    return (
        <Modal visible={loginVisible} animationType="slide">
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <TextInput
                    placeholder="Usuario"
                    style={styles.input}
                    value={username}
                    onChangeText={text => setUsername(text)}/>
                <TextInput
                    placeholder="Clave"
                    secureTextEntry
                    style={styles.input}
                    value={password}
                    onChangeText={text => setPassword(text)}/>
                <Button title="Iniciar Sesión" onPress={handleLogin}/>
                <Button title="Cancelar" onPress={handleClose}/>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 20,
        marginBottom: 20
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        width: '100%'
    }
});

export default LoginModal;
