import React, { Component } from 'react';

import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Card, Avatar } from 'react-native-elements';
import axios from 'axios'


export default class Pokemon extends Component {
  state = {
    data: [],
    offset: 1,
    loading: false,
  };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    if (this.state.loading) return;

    const { offset } = this.state;

    this.setState({ loading: true });

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
      const pokemons = await response.data;
      if(pokemons.results){
        this.setState({
          data: [ ...this.state.data, ...pokemons.results ],
          offset: offset + 20,
          loading: false,
      });
      }else(
        alert('Sem mais informacoes')
      )
    } catch {
      alert('Problema na requisicao')
    }  
  }

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View style={styles.loading}>
        <ActivityIndicator />
      </View>
    );
  };

  renderItem = ({ item }) => (
   <View>
        <Card title={item.name}
          containerStyle={styles.card}
          titleStyle={{fontSize:12}}
          >
          <View style={{alignItems:'center'}}>
            <Avatar
              rounded
              size='medium'
              overlayContainerStyle={{backgroundColor: '#A5D6A7'}}
              source={{
                uri:
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
              }}
            />
          </View>
        </Card>
      </View>
  );

  render() {
    return (
      <FlatList
        style={{ marginTop: 30 }}
        contentContainerStyle={styles.list}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.name}
        onEndReached={this.loadRepositories}
        onEndReachedThreshold={0.1}
        ListFooterComponent={this.renderFooter}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
  },

  listItem: {
    flexDirection:'column',
    backgroundColor: '#EEE',
    marginTop: 10,
    padding: 30,
  },

  loading: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  txt:{
    fontWeight:'bold',
    fontSize:15,
  },
  card: {
    width: 90,
    height: 120,
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor:'#66BB6A'
  }
});