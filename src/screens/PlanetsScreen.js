import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';

export default class PlanetsScreen extends Component {
  render() {
    return (
      <View>
        <CustomHeader title='Planetas'></CustomHeader>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
