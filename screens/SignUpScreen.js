import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

export default function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();

    return (
        <View style={styles.container}>
            <TextInput placeholder='E-mail'/>
            <TextInput placeholder='Password' secureTextEntry={true}/>
            <TouchableOpacity>
                Sign Up
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});