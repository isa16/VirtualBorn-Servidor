import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default class Main extends Component {
    render() {
        return (
            <ImageBackground source={require('../app/imagens/fundo.jpg')}
                style={styles.container}>
                <View style={styles.inner}>
                    <Text style={styles.titulo}>VirtualBorn</Text>
                    <ImageBackground source={require('../app/imagens/teacher.png')}
                        style={styles.icons}></ImageBackground>
                    <TouchableOpacity style={styles.botao}

                        onPress={() => {
                            this.props.navigation.navigate('MainProf')

                        }}>
                        <Text style={styles.buttonText}>Professor</Text>
                    </TouchableOpacity>
                    <ImageBackground source={require('../app/imagens/reading.png')}
                        style={styles.icons}></ImageBackground>
                    <TouchableOpacity style={styles.botao}

                        onPress={() => {
                            this.props.navigation.navigate('MainApp')

                        }}>
                        <Text style={styles.buttonText}>Aluno</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        color: '#0000CD',
        padding: 20,
        fontSize: 50,
        margin: 10,
    },
    icons: {
        padding: 0,
        margin: 10,
        flexDirection: 'column',
        width: 80,
        height: 80,
        textAlign: 'center',
    },
    inner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 170,
        height: 42,
        marginTop: 10,
        borderRadius: 50,
        backgroundColor: '#2089DA',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
    },
})