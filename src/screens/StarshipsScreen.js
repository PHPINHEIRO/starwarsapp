import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import ListFilmsInfinityScrollStarships from '../components/ListFilmsInfinityScrollStarships';
import CustomHeader from '../components/CustomHeader'

export default class StarshipsScreen extends Component {
  render() {
    return (
      <View>
        <CustomHeader title='Naves'></CustomHeader>
        <ListFilmsInfinityScrollStarships url='https://swapi.co/api/starships/'></ListFilmsInfinityScrollStarships>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
