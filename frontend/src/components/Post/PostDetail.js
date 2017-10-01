import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/posts';
import { Container, Header } from 'semantic-ui-react';

class PostDetail extends Component {
  componentWillMount() {
    this.props.getPostById(this.props.match.params.postId);
  }

  render() {
    const post = this.props.post;

    return (
      <Container text style={{ marginTop: '7em' }}>
        <Header as="h1">{post.title}</Header>
        <p>{post.description}</p>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  post: state.activePost
});

const mapDispatchToProps = dispatch => ({
  getPostById(id) {
    dispatch(fetchPost(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
