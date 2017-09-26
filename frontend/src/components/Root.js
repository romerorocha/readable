import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import App from '../components/App';
import Category from '../components/Category';
import PostDetail from '../components/PostDetail';
import PostForm from '../components/PostForm';
import MainMenu from '../components/MainMenu.js';
import { Container } from 'semantic-ui-react';

class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <BrowserRouter>
          <Container>
            <Route path="/" component={MainMenu} />
            <Route exact path="/" component={App} />
            <Route path="/category/:title" component={Category} />
            <Route exact path="/post" component={PostDetail} />
            <Route exact path="/postform" component={PostForm} />
          </Container>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Root;
