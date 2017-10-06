import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import MainMenu from './components/Menu/MainMenu';
import Home from './components/MainPages/Home';
import Category from './components/MainPages/Category';
import NewPost from './components/MainPages/NewPost';
import PostDetail from './components/Post/PostDetail';
import { Container } from 'semantic-ui-react';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container fluid>
          <MainMenu />
          <Route exact path="/" component={Home} />
          <Route exact path="/posts/new" component={NewPost} />
          <Route exact path="/:category" component={Category} />
          <Route exact path="/:category/:postId" component={PostDetail} />
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
