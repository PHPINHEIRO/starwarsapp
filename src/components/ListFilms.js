import React, { Component } from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import Film from './Film';
import axios from 'axios'




export default class ListFilms extends Component {

  state={
    listFilms:[],
  }

  async getFilms() {
    try {
      const response = await axios.get('https://swapi.co/api/films/')
      this.setState({
        listFilms: response.data.results
      })
    } catch(error){
      console.log(error);
    }
  }

  componentWillMount(){
    this.getFilms()
  }

  render() {
    return (
      <ScrollView>
        { this.state.listFilms.map(
          movie => (
            <Film key={movie.episode_id} film={movie}></Film>
          )
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})
