import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/posts';
import { fetchComments } from '../../actions/comments';
import {
  Container,
  Header,
  Divider,
  Breadcrumb,
  Comment
} from 'semantic-ui-react';

class PostDetail extends Component {
  componentWillMount() {
    const postId = this.props.match.params.postId;
    this.props.getPostById(postId);
    this.props.getComments(postId);
  }

  render() {
    const post = this.props.post;

    return (
      <Container fluid style={{ marginTop: '7em' }}>
        <Breadcrumb size="big">
          <Breadcrumb.Section>home</Breadcrumb.Section>
          <Breadcrumb.Divider icon="right chevron" />
          <Breadcrumb.Section active>{post.category}</Breadcrumb.Section>
          <Breadcrumb.Divider icon="right chevron" />
          <Breadcrumb.Section active>Post</Breadcrumb.Section>
        </Breadcrumb>
        <Divider />
        <Header>{post.title}</Header>
        <p>{post.description}</p>

        <Header as="h3" dividing>
          Comments
        </Header>

        <Comment.Group>
          {this.props.comments.map(comment => (
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
