import React, { Component } from 'react';

import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';


export default class ListFilmsInfinityScrollStarships extends Component {
  state = {
    data: [],
    page: 1,
    loading: false,
  };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    if (this.state.loading) return;

    const { page } = this.state;

    this.setState({ loading: true });


    try {
      const response = await fetch(`${this.props.url}?page=${page}`);
      const films = await response.json();
      if(films.results){
        this.setState({
          data: [ ...this.state.data, ...films.results ],
          page: page + 1,
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
    <View style={styles.listItem}>
      <Text style={styles.txt}>Nome: </Text>
      <Text>{item.name}</Text>
      <Text style={styles.txt}>Modelo: </Text>
      <Text>{item.model}</Text>
      <Text style={styles.txt}>Fabricante: </Text>
      <Text>{item.manufacturer}</Text>
      <Text style={styles.txt}>Preço: </Text>
      <Text>{item.cost_in_credits}</Text>
      <Text style={styles.txt}>Tamanho: </Text>
      <Text>{item.length}</Text>
      <Text style={styles.txt}>Vel. Max: </Text>
      <Text>{item.max_atmosphering_speed}</Text>
      <Text style={styles.txt}>Vel. Hiperdrive: </Text>
      <Text>{item.hyperdrive_rating}</Text>
      <Text style={styles.txt}>Classe: </Text>
      <Text>{item.starship_class}</Text>
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
});





ListFilmsInfinityScrollStarships