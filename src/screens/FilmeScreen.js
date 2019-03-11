import React, { Component } from 'react'
import {StyleSheet, View } from 'react-native'
import ListFilms from '../components/ListFilms';
import CustomHeader from '../components/CustomHeader'



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


