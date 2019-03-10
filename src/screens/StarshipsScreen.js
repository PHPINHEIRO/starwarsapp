import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import ListFilmsInfinityScrollStarships from '../components/ListFilmsInfinityScrollStarships';

export default class StarshipsScreen extends Component {
  render() {
    return (
      <View>
        <ListFilmsInfinityScrollStarships url='https://swapi.co/api/starships/'></ListFilmsInfinityScrollStarships>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
