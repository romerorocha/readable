import React, { Component } from 'react';
import * as ReadableApi from '../Util/ReadableApi';
import MainMenu from './MainMenu.js';

class Home extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.loadCategories();
  }

  loadCategories = async () => {
    const categories = await ReadableApi.getCategories();
    this.setState({ categories });
  };

  render() {
    return <MainMenu categories={this.state.categories} />;
  }
}

export default Home;
