import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Divider } from 'semantic-ui-react';
import { ALL_POSTS } from '../util/Constants';
import { activateMenu } from '../actions/activateMenu';
import { fetchAllPosts } from '../actions/posts';
import SortedPosts from '../containers/SortedPosts';

class Home extends Component {
  componentWillMount() {
    this.props.activate(ALL_POSTS);
    this.props.fetchPosts();
  }

  render() {
    return (
      <Container fluid>
        <Header as="h3">All Posts</Header>
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
