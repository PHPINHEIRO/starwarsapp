import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';


export default class FilmeScreen extends Component {
  render() {
    return (
      <View>
        <CustomHeader title='Filmes'></CustomHeader>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
