import React, { Component } from 'react';
import api from '../services/api';
import { View, Text, TextInput, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

export default class Main extends Component {

    state = {
        nome: '',
        email: '',
        senha: '',
    }

    handleNextPage() {
        this.props.navigation.navigate('MainApp')
    }

    handleCriar = async () => {
        const response = await api.post('professor', {
            nome: this.state.nome,
            email: this.state.email,
            senha: this.state.senha,
        })
        this.handleNextPage()
    }

    render() {
        return (
            <ImageBackground source={require('../app/imagens/fundo.jpg')}
                style={styles.container}>
                <View style={styles.inner}>
                    <Text style={styles.titulo1}>VirtualBorn</Text>

                    <TextInput style={styles.input}
                        underlineColorAndroid='rgb(173, 216, 230)'
                        placeholder="E-mail"
                        placeholderTextColor="#F0F8FF"
                        autoCapitalize="none"
                        onChangeText={this.state.email}
                        email={this.state.email}
                        onChangeText={text => this.setState({ email: text })} />
                    <TextInput style={styles.input}
                        underlineColorAndroid='rgb(173, 216, 230)'
                        placeholderTextColor="#F0F8FF"
                        placeholder="Senha"
                        
                        autoCapitalize="none"
                        onChangeText={this.state.senha}
                        senha={this.state.senha}
                        onChangeText={text => this.setState({ senha: text })} />
                    <TouchableOpacity style={styles.botao}

                        onPress={() => {
                            this.props.navigation.navigate('MainApp')

                        }}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <Text>Ainda não possui cadastro?</Text>
                    <TouchableOpacity style={styles.botao2}

                        onPress={() => {
                            this.props.navigation.navigate('Cadastro')

                        }}>
                        <Text style={styles.buttonText1}>Cadastre-se</Text>
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
    },
    input: {
        width: 200,
        height: 45,
        marginTop: 10,
        backgroundColor: 'rgb(173, 216, 230)',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
})