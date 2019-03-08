import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import TabNavigator from './src/routes/TabNavigator';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TabNavigator></TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
