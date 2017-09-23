import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './Components/Home';
import Category from './Components/Category';
import PostDetail from './Components/PostDetail';
import PostForm from './Components/PostForm';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/categorie" render={() => <Category />} />
        <Route exact path="/post" render={() => <PostDetail />} />
        <Route exact path="/postform" render={() => <PostForm />} />
      </div>
    );
  }
}

export default App;
