import React, { Component } from 'react'
import {StyleSheet, View } from 'react-native'
import ListFilms from '../components/ListFilms';
import { Button } from 'react-native-elements';
import firebase from 'react-native-firebase'



export default class FilmeScreen extends Component {
  state = { currentUser: null }
  render() {
    const { currentUser } = this.state
    return (
      <View>
        <Button title='logout' onPress={()=>{firebase.auth().signOut().then(()=>{this.props.navigation.navigate('Login')})}}></Button>
        <ListFilms></ListFilms>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
