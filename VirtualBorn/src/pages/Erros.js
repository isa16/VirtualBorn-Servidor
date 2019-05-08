import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default class Erros extends Component {
    render() {
        return (
            <ImageBackground source={require('../app/imagens/fundo.jpg')}
                style={styles.container}>
                <View style={styles.inner}>
                <Text style={styles.titulo}>Erros:</Text>
                    <TextInput style={styles.bolinha}
                        backgroundColor="rbg(166, 202, 229)"
                        autoCapitalize="none"
                        onChangeText={this.handleNome} />
                    <Text>Texto de acordo com os erros.</Text>
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
    inner: {
        height: 500,
        width: 300,
        backgroundColor: 'rgb(100,149,237)',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        flex: 0,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 25,
        margin: 40,

    },
})