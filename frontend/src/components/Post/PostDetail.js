import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/posts';
import { fetchComments } from '../../actions/comments';
import Breadcrumbs from '../Breadcrumbs';
import { Container, Header, Divider, Comment, Icon } from 'semantic-ui-react';

class PostDetail extends Component {
  componentWillMount() {
    const postId = this.props.match.params.postId;
    this.props.getPostById(postId);
    this.props.getComments(postId);
  }

  render() {
    const { post, comments } = this.props;
    const postDate = new Date(post.timestamp).toLocaleString();

    return (
      <Container fluid style={{ marginTop: '7em' }}>
        <Breadcrumbs category={post.category} post />
        <Divider />
        <Header as="h1">{post.title}</Header>
        <p>
          <Icon name="user" />
          <strong>{post.author}</strong>
        </p>
        <p>
          <Icon name="calendar" />
          <strong>{postDate}</strong>
        </p>
        <p>{post.body}</p>

        <Header as="h3" dividing>
          Comments ({comments.length})
        </Header>
        <Comment.Group>
          {comments.map(comment => (
            <Comment key={comment.id}>
              <Comment.Content>
                <Comment.Author as="a">{comment.author}</Comment.Author>
                <Comment.Metadata>
                  <div>Today at 5:42PM</div>
                </Comment.Metadata>
                <Comment.Text>How artistic!</Comment.Text>
                <Comment.Actions>
                  <Comment.Action>Reply</Comment.Action>
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          ))}
        </Comment.Group>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post,
  comments: Object.keys(state.comments).map(key => state.comments[key])
});

const mapDispatchToProps = dispatch => ({
  getPostById(id) {
    dispatch(fetchPost(id));
  },
  getComments(postId) {
    dispatch(fetchComments(postId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
