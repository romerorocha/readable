import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Category from './Components/Category';
import PostDetail from './Components/PostDetail';
import PostForm from './Components/PostForm';
import * as ReadableApi from './Util/ReadableApi';
import MainMenu from './Components/MainMenu.js';

class App extends Component {
  state = {
    categories: []
  };

  componentWillMount() {
    this.loadCategories();
  }

  loadCategories = async () => {
    const categories = await ReadableApi.getCategories();
    this.setState({ categories });
  };

  render() {
    return (
      <div>
        <MainMenu categories={this.state.categories} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category/:title" component={Category} />
          <Route exact path="/post" component={PostDetail} />
          <Route exact path="/postform" component={PostForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
