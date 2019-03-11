import React from 'react'
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import firebase from 'react-native-firebase'

export default class Login extends React.Component {
  state = { email: '', password: '', errorMessage: null }

  handleLogin = () => {
    const { email, password } = this.state
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        
        <View style={styles.buttoncontainer}>
          <TouchableOpacity style={styles.button} onPress={this.handleLogin}><Text style={styles.txt}>        Login        </Text></TouchableOpacity>
          <TouchableOpacity style={styles.button}
            onPress={() => this.props.navigation.navigate('SignUp')}
          ><Text style={styles.txt}>   Ainda não tem conta? Cadastre-se   </Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: '#FFE850',
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 20,
    backgroundColor: '#424242',
    color: '#FFF'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#FFE850',
  },
  button: {
    height: 40,
    width: '200%',
    borderRadius: 50,
    borderWidth: 1,
    backgroundColor: '#FFE850',
  },
  txt: {
    fontSize: 16,
    fontWeight: 'bold',
    margin: 10,
  },
  buttoncontainer: {
    paddingTop: 80,
    alignItems: 'center'
  }
})