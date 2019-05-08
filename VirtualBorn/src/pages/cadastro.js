
import React, { Component } from 'react';
import api from '../services/api';
import { View, Text, TextInput, ImageBackground, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export default class Cadastro extends Component {

    state = {
        nome: '',
        email: '',
        senha: '',
    }

    handleNextPage() {
        this.props.navigation.navigate('MainApp')
    }

    handleAlert() {
        Alert.alert(
            'Pronto',
            'Cadastro realizado com sucesso',
        )
    }

    handleCriar = async () => {
        const response = await api.post('professor', {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
        })

    }

    render() {
        return (
            <ImageBackground source={require('../app/imagens/fundo.jpg')}
                style={styles.container}>
                <View style={styles.inner}>
                    <Text style={styles.titulo1}>VirtualBorn</Text>
                    <Text style={styles.titulo}>Cadastro do Professor</Text>
                    <TextInput style={styles.input}
                        placeholder="Nome Completo"
                        underlineColorAndroid='rgb(173, 216, 230)'
                        placeholderTextColor="#F0F8FF"
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={this.state.nome}
                        onChangeText={text => this.setState({ nome: text })} />
                    <TextInput style={styles.input}
                        underlineColorAndroid='rgb(173, 216, 230)'
                        placeholderTextColor="#F0F8FF"
                        placeholder="E-mail"
                        value={this.state.email}
                        onChangeText={text => this.setState({ email: text })} />
                    <TextInput secureTextEntry={true}
                        style={styles.input}
                        underlineColorAndroid='rgb(173, 216, 230)'
                        placeholderTextColor="#F0F8FF"
                        placeholder="Senha"
                        autoCapitalize="none"
                        value={this.state.senha}
                        onChangeText={text => this.setState({ senha: text })} />
                    <TouchableOpacity style={styles.botao}

                        onPress={() => {
                            this.handleCriar()
                            this.handleAlert()
                            this.handleNextPage()

                        }}>
                        <Text style={styles.buttonText}>Cadastrar</Text>

                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        padding: 0,
        margin: 10,
        fontSize: 20,
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
        marginTop: 10,
        borderRadius: 50,
        backgroundColor: '#2089DA',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
    },
    input: {
        width: 200,
        height: 45,
        marginTop: 10,
        padding: 10,
        backgroundColor: 'rgb(173, 216, 230)',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})