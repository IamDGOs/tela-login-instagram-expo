import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, Image, TouchableOpacity, Text, Platform, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <StatusBar style="auto" />

          <Image
            source={require('./src/assets/insta.png')}
            style={styles.logo}
          />

          <TextInput
            placeholder='Telefone, nome de usuário ou email'
            style={styles.input}
          />

          <TextInput
            placeholder='Senha'
            style={styles.input}
          />

          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginText}>Entrar</Text>
          </TouchableOpacity>

          <View style={styles.divisor}>
            <View style={styles.divisorLine}></View>
            <Text style={{ marginHorizontal: '3%', color: '#979797' }}>OU</Text>
            <View style={styles.divisorLine}></View>
          </View>

          <TouchableOpacity style={styles.fbContainer}>
            <FontAwesome5 name='facebook' size={25} color='#385185' />
            <Text style={styles.fbText}>Entrar com o Facebook</Text>
          </TouchableOpacity>

          <View style={styles.forgotContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Não tem uma conta?</Text>
            <TouchableOpacity>
              <Text style={styles.signUpButton}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: Platform.OS === 'android' ? '8%' : '10%',
    maxWidth: 280,
    maxHeight: 100,
  },
  input: {
    width: '70%',
    height: 42,
    backgroundColor: '#fff',
    marginBottom: 15,
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  loginButton: {
    marginTop: 15,
    backgroundColor: '#399fff',
    width: '70%',
    height: 42,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginText: {
    color: '#fff',
  },
  divisor: {
    marginTop: '10%',
    flexDirection: 'row',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  divisorLine: {
    width: '42%',
    height: 2,
    backgroundColor: '#c4c4c4'
  },
  fbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%',
  },
  fbText: {
    color: '#385185',
    paddingLeft: 8,
    fontSize: 14,
    fontWeight: '600'
  },
  forgotContainer: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  forgotText: {
    fontSize: 12,
    color: '#00376b',
    fontWeight: '300'
  },
  signUpContainer: {
    flexDirection: 'row',
    marginTop: '15%'
  },
  signUpText: {
    color: '#979797',
    paddingRight: 5
  },
  signUpButton: {
    color: '#0095f6',
    fontWeight: 'bold'
  }
});
