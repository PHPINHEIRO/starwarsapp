import React, { Component } from 'react';

import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';


export default class ListFilmsInfinityScrollSpecies extends Component {
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
      <Text>{item.name}</Text>
      <Text>{item.classification}</Text>
      <Text>{item.designation}</Text>
      <Text>{item.average_height}</Text>
      <Text>{item.average_lifespan}</Text>
      <Text>{item.hair_colors}</Text>
      <Text>{item.eye_colors}</Text>
      <Text>{item.language}</Text>
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
});

