import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import MainMenu from './components/Menu/MainMenu';
import Home from './components/Pages/Home';
import Category from './components/Pages/Category';
import PostDetail from './components/Post/PostDetail';
import PostForm from './components/Post/PostForm';
import { Container } from 'semantic-ui-react';

const App = ({ store }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container fluid>
          <MainMenu />
          <Route exact path="/" component={Home} />
          <Route exact path="/:category" component={Category} />
          <Route exact path="/:category/:postId" component={PostDetail} />
          <Route path="/postform" component={PostForm} />
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
