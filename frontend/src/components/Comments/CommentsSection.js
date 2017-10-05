import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import CommentList from './CommentList';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comments';

class CommentsSection extends Component {
  componentDidMount() {
    this.props.loadComments();
  }

  render() {
    const { postId, comments } = this.props;
    return [
      <Header key="0" as="h3" dividing>
        Comments ({comments.length})
      </Header>,
      <CommentList key="1" postId={postId} comments={comments} />
    ];
  }
}

const mapStateToProps = (state, ownProps) => ({
  comments: getSortedComments(state.comments, ownProps.postId)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadComments() {
    dispatch(fetchComments(ownProps.postId));
  }
});

const getSortedComments = (comments, postId) => {
  const postWithComments = comments[postId];
  return postWithComments
    ? Object.keys(postWithComments)
        .map(key => postWithComments[key])
        .sort((a, b) => b.voteScore - a.voteScore)
    : [];
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsSection);
