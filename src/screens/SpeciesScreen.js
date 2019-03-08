import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';

export default class SpeciesScreen extends Component {
  render() {
    return (
      <View>
        <CustomHeader title='Espécie'></CustomHeader>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
