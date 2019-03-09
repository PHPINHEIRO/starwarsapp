import React, { Component } from 'react';

import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';

const baseURL = 'https://swapi.co/api/films/';
// const searchTerm = 'react';
// const perPage = 20;

export default class ListFilms extends Component {
  state = {
    data: [],
    // page: 1,
    loading: false,
  };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    if (this.state.loading) return;

    // const { page } = this.state;

    this.setState({ loading: true });


    const response = await fetch(baseURL);
    const repositories = await response.json();

    this.setState({
      data: [ ...this.state.data, ...repositories.results ],
      // page: page + 1,
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
      <Text>{item.title}</Text>
      <Text>{item.director}</Text>
      <Text>{item.opening_crawl}</Text>
    </View>
  );

  render() {
    return (
      <FlatList
        style={{ marginTop: 30 }}
        contentContainerStyle={styles.list}
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.episode_id.toString()}
        // onEndReached={this.loadRepositories}
        // onEndReachedThreshold={0.1}
        ListFooterComponent={this.renderFooter}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
  },

  listItem: {
    backgroundColor: '#EEE',
    marginTop: 20,
    padding: 30,
  },

  loading: {
    alignSelf: 'center',
    marginVertical: 20,
  },
});