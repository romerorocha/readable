import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, receivePost } from '../../actions/posts';
import { fetchComments } from '../../actions/comments';
import Breadcrumbs from '../Breadcrumbs';
import {
  Container,
  Header,
  Divider,
  Comment,
  Icon,
  Sidebar,
  Menu,
  Segment,
  Button
} from 'semantic-ui-react';

class PostDetail extends Component {
  state = { visible: false };

  componentWillMount() {
    const postId = this.props.match.params.postId;
    this.props.getPostById(postId);
    this.props.getComments(postId);
  }

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { post, comments } = this.props;
    const postDate = new Date(post.timestamp).toLocaleString();
    const { visible } = this.state;

    return (
      <Container fluid style={{ marginTop: '7em' }}>
        <Breadcrumbs category={post.category} post />
        <Divider />
        <Sidebar.Pushable as={Segment}>
          <Button.Group floated="right">
            <Button basic icon="thumbs up" />
            <Button.Or
              text={
                post.voteScore > 0 ? '+'.concat(post.voteScore) : post.voteScore
              }
            />/>
            <Button basic icon="thumbs down" />
            <Button basic onClick={this.toggleVisibility} icon="setting" />
          </Button.Group>
          <Sidebar
            as={Menu}
            animation="overlay"
            width="thin"
            direction="top"
            visible={visible}
            inverted
          >
            <Menu.Menu position="right">
              <Menu.Item icon="write" name="Edit" />
              <Menu.Item icon="trash" name="Delete" />
              <Menu.Item icon="arrow up" onClick={this.toggleVisibility} />
            </Menu.Menu>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
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
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

        <Segment>
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
        </Segment>
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
    dispatch(receivePost({}));
    dispatch(fetchComments(postId));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
