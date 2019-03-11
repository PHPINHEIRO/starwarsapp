import React, { Component } from 'react';

import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';


export default class ListFilmsInfinityScrollPlanets extends Component {
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


    const response = await fetch(`${this.props.url}?page=${page}`);
    const films = await response.json();

    this.setState({
      data: [ ...this.state.data, ...films.results ],
      page: page + 1,
      loading: false,
    });
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
      <Text style={styles.txt}>Nome:</Text>
      <Text>{item.name}</Text>
      <Text style={styles.txt}>Período de Rotação: </Text>
      <Text>{item.rotation_period}</Text>
      <Text style={styles.txt}>Diâmetro:</Text>
      <Text>{item.diameter}</Text>
      <Text style={styles.txt}>Clima:</Text>
      <Text>{item.climate}</Text>
      <Text style={styles.txt}>Gravidade:</Text>
      <Text>{item.gravity}</Text>
      <Text style={styles.txt}>Terreno:</Text>
      <Text>{item.terrain}</Text>
      <Text style={styles.txt}>Super. Água:</Text>
      <Text>{item.surface_water}</Text>
      <Text style={styles.txt}>População:</Text>
      <Text>{item.population}</Text>
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
  }
});