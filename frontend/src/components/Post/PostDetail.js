import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, voteOnPost } from '../../actions/posts';
import { fetchComments, voteOnComment } from '../../actions/comments';
import Breadcrumbs from '../Breadcrumbs';
import Comments from '../Comments/Comments';
import PostContent from './PostContent';
import VoteButtons from './VoteButtons';
import { Container, Divider } from 'semantic-ui-react';

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

  render() {
    const { post, comments, votePost, voteComment } = this.props;

    return post ? (
      <Container>
        <Breadcrumbs category={post.category} post />
        <Divider />
        <VoteButtons key="0" voteAction={votePost} voteScore={post.voteScore} />
        <PostContent post={post} />
        <Comments
          comments={comments}
          postId={post.id}
          voteAction={voteComment}
        />
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadPost(id) {
    dispatch(fetchPost(id));
  },
  votePost(vote) {
    dispatch(voteOnPost(ownProps.match.params.postId, vote));
  },
  loadComments(postId) {
    dispatch(fetchComments(postId));
  },
  voteComment(id, vote) {
    dispatch(voteOnComment(id, vote));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
