import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default class MainProf extends Component {
    render() {
        return (
            <ImageBackground source={require('../app/imagens/fundo.jpg')}
                style={styles.container}>
                <View style={styles.inner}>
                <Text style={styles.titulo1}>VirtualBorn</Text>
                    <TouchableOpacity style={styles.botao}

                        onPress={() => {
                            this.props.navigation.navigate('MainProf')

                        }}>
                        <Text style={styles.buttonText}>Informações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao}

                        onPress={() => {
                            this.props.navigation.navigate('ListProfs')

                        }}>
                        <Text style={styles.buttonText}>Professores</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao}

                        onPress={() => {
                            this.props.navigation.navigate('MainProf')

                        }}>
                        <Text style={styles.buttonText}>Feedback</Text>
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
    titulo1: {
        padding: 20,
        fontSize: 30,
        color: '#FFF',
        margin: 10,
    },
    inner: {
        height: 500,
        width: 300,
        backgroundColor: 'rgb(135,206,250)',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 170,
        height: 42,
        margin: 10,
        marginTop: 40,
        borderRadius: 50,
        backgroundColor: '#2089DA',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
})