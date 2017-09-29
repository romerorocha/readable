import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activateMenu } from '../actions/activateMenu';
import { fetchAllPosts } from '../actions/posts';
import { Container, Header } from 'semantic-ui-react';
import SortedPosts from '../containers/SortedPosts';
import { ALL_POSTS } from '../util/Constants';

class Home extends Component {
  componentWillMount() {
    this.props.activate(ALL_POSTS);
    this.props.fetchPosts();
  }

  render() {
    return (
      <Container fluid>
        <Header as="h3">All Posts</Header>
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
