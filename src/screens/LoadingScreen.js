import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import firebase from 'react-native-firebase'   

export default class Loading extends React.Component {

  componentDidMount(){
    firebase.auth().onAuthStateChanged( user => {
      this.props.navigation.navigate( user ? 'Main': 'SignUp')
    })
     console.log(firebase.auth())

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Verificando Usuário...</Text>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt:{
    color:'#FFE850'
  }
})