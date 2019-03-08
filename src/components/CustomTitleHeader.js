import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class CustomTitleHeader extends Component {
  render() {
    return (
        <Text style={styles.txt}>{this.props.title}</Text>
    )
  }
}

const styles = StyleSheet.create({
    txt:{
        fontFamily:'Star Jedi',
        fontWeight: 'bold',
        color: '#FFE850', 
        fontSize:24, 
    }
})
