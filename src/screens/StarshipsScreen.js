import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import ListFilmsInfinityScrollStarships from '../components/ListFilmsInfinityScrollStarships';

export default class StarshipsScreen extends Component {
  state = { currentUser: null }
  render() {
    const { currentUser } = this.state
    return (
      <View>
        <ListFilmsInfinityScrollStarships url='https://swapi.co/api/starships/'></ListFilmsInfinityScrollStarships>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
