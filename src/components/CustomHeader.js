import React, { Component } from 'react'
import {StyleSheet, View } from 'react-native'
import { Header, Text } from 'react-native-elements';
import CustomTitleHeader from './CustomTitleHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CustomHeader extends Component {
  render() {
    return (
      <View>
        <Header
          containerStyle={{
            backgroundColor: '#424242',
          }}
          centerComponent={<CustomTitleHeader title={this.props.title}></CustomTitleHeader>}
        >
        </Header>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  
})
