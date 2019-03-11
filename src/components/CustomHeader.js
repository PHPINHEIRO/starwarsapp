import React, { Component } from 'react'
import {StyleSheet, View } from 'react-native'
import { Header, Button } from 'react-native-elements';
import CustomTitleHeader from './CustomTitleHeader';
import firebase from 'react-native-firebase'




export default class CustomHeader extends Component {
  logout = () => {
    firebase.auth().signOut().then(()=>{this.props.navigation.navigate('Login')})
  }
  render() {
    return (
      <View>
        <Header
          containerStyle={{
            backgroundColor: '#424242',
          }}
          centerComponent={<CustomTitleHeader title={this.props.title}></CustomTitleHeader>}
          rightComponent={
            <Button buttonStyle={styles.button} title='Sair' onPress={this.logout}></Button>
          }
        >
        </Header>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:'transparent'
  }
})
