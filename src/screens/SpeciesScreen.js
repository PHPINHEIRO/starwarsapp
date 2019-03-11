import React, { Component } from 'react'
import {StyleSheet, View } from 'react-native'
import ListFilmsInfinityScrollSpecies from '../components/ListFilmsInfinityScrollSpecies';
import CustomHeader from '../components/CustomHeader'

export default class SpeciesScreen extends Component {
  render() {
    return (
      <View>
        <CustomHeader title='Espécies'></CustomHeader>
        <ListFilmsInfinityScrollSpecies url='https://swapi.co/api/species/'></ListFilmsInfinityScrollSpecies>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
