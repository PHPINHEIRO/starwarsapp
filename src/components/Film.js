import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Card} from 'react-native-elements'

export default class Film extends Component {
  render() {
    return (
      <Card title={this.props.film.title}>
        <View >
          <Text style={styles.name}>{this.props.film.director}</Text>
          <Text style={styles.name}>{this.props.film.release_date}</Text>
        </View>
      </Card>
    )
  }
}

const styles = StyleSheet.create({})
