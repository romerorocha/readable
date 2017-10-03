import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Divider } from 'semantic-ui-react';
import { ALL_POSTS } from '../util/Constants';
import { activateMenu } from '../actions/UI';
import { fetchAllPosts } from '../actions/posts';
import SortedPosts from '../containers/SortedPosts';
import Breadcrumbs from './Breadcrumbs';

class Home extends Component {
  componentWillMount() {
    this.props.fetchPosts();
    this.props.activate(ALL_POSTS);
  }

  render() {
    return (
      <Container>
        <Breadcrumbs category="all posts" />
        <Divider />
        <SortedPosts />
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  activate(menu) {
    dispatch(activateMenu(menu));
  },
  fetchPosts() {
    dispatch(fetchAllPosts());
  }
});

export default connect(null, mapDispatchToProps)(Home);
