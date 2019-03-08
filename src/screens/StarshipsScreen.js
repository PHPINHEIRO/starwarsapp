import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import CustomHeader from '../components/CustomHeader';

export default class StarshipsScreen extends Component {
  render() {
    return (
      <View>
        <CustomHeader title='Naves'></CustomHeader>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
