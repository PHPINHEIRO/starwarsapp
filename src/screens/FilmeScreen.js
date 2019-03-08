import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';
import ListFilms from '../components/ListFilms';


export default class FilmeScreen extends Component {
  render() {
    return (
      <View>
        <CustomHeader title='Filmes'></CustomHeader>
        <ListFilms></ListFilms>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
