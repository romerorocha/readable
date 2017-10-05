import CommentList from '../components/Comments/CommentList';
import { connect } from 'react-redux';
import { EMPTY } from '../util/Constants';
import UUID from 'uuid/v1';
import {
  fetchComments,
  addComment,
  updateComment,
  voteOnComment,
  removeComment
} from '../actions/comments';

const getSortedComments = (comments, postId) => {
  const postWithComments = comments[postId];
  return postWithComments
    ? Object.keys(postWithComments)
        .map(key => postWithComments[key])
        .sort((a, b) => b.voteScore - a.voteScore)
    : [];
};

const createComment = (author, body, postId) => {
  return {
    id: UUID(),
    timestamp: Date.now(),
    parentId: postId,
    author,
    body
  };
};

const mapStateToProps = (state, ownProps) => ({
  comments: getSortedComments(state.entities.comments, ownProps.postId)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadComments() {
    dispatch(fetchComments(ownProps.postId));
  },
  save(id, author, body) {
    if (id === EMPTY) {
      const comment = createComment(author, body, ownProps.postId);
      dispatch(addComment(comment));
    } else {
      dispatch(updateComment(id, body));
    }
  },
  vote(id, vote) {
    dispatch(voteOnComment(id, vote));
  },
  remove(id) {
    dispatch(removeComment(id));
  }
});

const SortedComments = connect(mapStateToProps, mapDispatchToProps)(
  CommentList
);
export default SortedComments;
