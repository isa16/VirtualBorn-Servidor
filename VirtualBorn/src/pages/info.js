import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Button, TouchableOpacity } from 'react-native';

export default class Main extends Component {
    render() {
        return (
            <ImageBackground source={require('../app/imagens/fundo.jpg')}
                style={styles.container}>
                <View style={styles.inner}>
                <Text style={styles.titulo}>Informações</Text>
                    <TextInput style={styles.input}
                        backgroundColor="rbg(166, 202, 229)"
                        placeholder="Nome Completo do Aluno"
                        placeholderTextColor="#fffff0"
                        autoCapitalize="none"
                        onChangeText={this.handleNome} />
                    <TouchableOpacity style={styles.botao}>
                        <Button
                            onPress={() => {
                                this.props.navigation.navigate('Erros')
                            }}
                            title="Erros"
                            color='#2089DA' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao}>
                        <Button
                            onPress={() => {
                                this.props.navigation.navigate('Acertos')
                            }}
                            title="Acertos"
                            color='#2089DA' />
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