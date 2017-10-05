import React, { Component } from 'react';
import AddModal from './AddModal';
import { Header } from 'semantic-ui-react';
import CommentList from './CommentList';
import { connect } from 'react-redux';
import {
  fetchComments,
  voteOnComment,
  removeComment
} from '../../actions/comments';

class Comments extends Component {
  componentDidMount() {
    this.props.loadComments();
  }

  render() {
    const { postId, comments, voteComment, deleteComment } = this.props;
    return [
      <Header key="0" as="h3" dividing>
        Comments ({comments.length})
      </Header>,
      <AddModal key="1" postId={postId} />,
      <CommentList
        key="2"
        comments={comments}
        voteAction={voteComment}
        deleteAction={deleteComment}
      />
    ];
  }
}

const mapStateToProps = (state, ownProps) => ({
  comments: getSortedComments(state.comments, ownProps.postId)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadComments() {
    dispatch(fetchComments(ownProps.postId));
  },
  voteComment(id, vote) {
    dispatch(voteOnComment(id, vote));
  },
  deleteComment(id) {
    dispatch(removeComment(id));
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

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
