import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import ListFilmsInfinityScrollPlanets from '../components/ListFilmsInfinityScrollPlanets';
import CustomHeader from '../components/CustomHeader'

export default class PlanetsScreen extends Component {
  render() {
    return (
      <View>
        <CustomHeader title='Planetas'></CustomHeader>
        <ListFilmsInfinityScrollPlanets url='https://swapi.co/api/planets/'></ListFilmsInfinityScrollPlanets>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
