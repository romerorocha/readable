import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import MainMenu from './MainMenu';
import Home from '../components/Home';
import Category from '../components/Category';
import PostDetail from '../components/PostDetail';
import PostForm from '../components/PostForm';
import { Container } from 'semantic-ui-react';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container fluid>
          <MainMenu />
          <Route exact path="/" component={Home} />
          <Route exact path="/:category" component={Category} />
          <Route exact path="/:category/:post_id" component={PostDetail} />
          <Route path="/postform" component={PostForm} />
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

export default Root;
