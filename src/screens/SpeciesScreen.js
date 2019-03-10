import React, { Component } from 'react'
import {StyleSheet, View } from 'react-native'
import ListFilmsInfinityScrollSpecies from '../components/ListFilmsInfinityScrollSpecies';

export default class SpeciesScreen extends Component {
  state = { currentUser: null }
  render() {
    const { currentUser } = this.state
    return (
      <View>
        <ListFilmsInfinityScrollSpecies url='https://swapi.co/api/species/'></ListFilmsInfinityScrollSpecies>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
