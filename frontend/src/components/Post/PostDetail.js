import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, receiveSelectedPost } from '../../actions/posts';
import { fetchComments, voteOnComment } from '../../actions/comments';
import Breadcrumbs from '../Breadcrumbs';
import Comments from './Comments';
import PostSidebar from './PostSidebar';
import PostContent from './PostContent';
import { Container, Divider, Sidebar } from 'semantic-ui-react';

class PostDetail extends Component {
  componentWillMount() {
    const postId = this.props.match.params.postId;
    this.loadPostsIfNeeded(postId);
    this.props.loadComments(postId);
  }

  loadPostsIfNeeded = id => {
    if (Object.keys(this.props.posts.byId).length === 0) {
      this.props.loadPost(id);
    }
  };

  handleVote = (id, vote) => {
    this.props.voteAction(id, vote);
  };

  render() {
    const { post, comments } = this.props;

    return post ? (
      <Container>
        <Breadcrumbs category={post.category} post />
        <Divider />
        <Sidebar.Pushable>
          <PostSidebar post={post} />
          <Sidebar.Pusher>
            <PostContent post={post} />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
        <Comments comments={comments} voteAction={this.handleVote} />
      </Container>
    ) : (
      false
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: state.posts.byId[ownProps.match.params.postId],
  posts: state.posts,
  comments: Object.keys(state.comments).map(key => state.comments[key])
});

const mapDispatchToProps = dispatch => ({
  loadPost(id) {
    dispatch(fetchPost(id));
  },
  setSelectedPost(id) {
    dispatch(receiveSelectedPost(id));
  },
  loadComments(postId) {
    dispatch(fetchComments(postId));
  },
  voteAction: (id, vote) => {
    dispatch(voteOnComment(id, vote));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
