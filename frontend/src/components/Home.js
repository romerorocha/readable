import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activateMenu } from '../actions/activateMenu';
import { fetchAllPosts } from '../actions/posts';
import { Container, Header, Divider } from 'semantic-ui-react';
import SortedPosts from '../containers/SortedPosts';

class Home extends Component {
  componentWillMount() {
    this.props.activate('/');
    this.props.fetchPosts();
  }

  render() {
    return (
      <Container>
        <Header as="h3">All Posts</Header>
        <Divider />
        <SortedPosts />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => ({
  activate(menu) {
    dispatch(activateMenu(menu));
  },
  fetchPosts() {
    dispatch(fetchAllPosts());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
