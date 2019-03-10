import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import ListFilmsInfinityScrollPlanets from '../components/ListFilmsInfinityScrollPlanets';

export default class PlanetsScreen extends Component {
  render() {
    return (
      <View>
        <ListFilmsInfinityScrollPlanets url='https://swapi.co/api/planets/'></ListFilmsInfinityScrollPlanets>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
