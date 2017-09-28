import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activateMenu } from '../actions/activateMenu';
import { fetchAllPosts } from '../actions/posts';
import { Container, Header } from 'semantic-ui-react';
import Posts from './Post/Posts';

class Home extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    return Object.keys(posts).length === 0 ? (
      <Container />
    ) : (
      <Container>
        <Header as="h3">Posts by vote score</Header>

        <Posts posts={posts} />
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
