import React, { Component } from 'react'
import {StyleSheet, View } from 'react-native'
import ListFilms from '../components/ListFilms';


export default class FilmeScreen extends Component {
  state = { currentUser: null }
  render() {
    const { currentUser } = this.state
    return (
      <View>
        <ListFilms></ListFilms>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
