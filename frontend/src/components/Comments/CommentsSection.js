import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import CommentList from './CommentList';
import { connect } from 'react-redux';
import UUID from 'uuid/v1';
import {
  fetchComments,
  addComment,
  updateComment,
  voteOnComment,
  removeComment
} from '../../actions/comments';

class CommentsSection extends Component {
  componentDidMount() {
    this.props.loadComments();
  }

  render() {
    const { comments, addNew, update, vote, remove } = this.props;
    return [
      <Header key="0" as="h3" dividing>
        Comments ({comments.length})
      </Header>,
      <CommentList
        key="1"
        comments={comments}
        addNew={addNew}
        update={update}
        vote={vote}
        remove={remove}
      />
    ];
  }
}

const mapStateToProps = (state, ownProps) => ({
  comments: getSortedComments(state.entities.comments, ownProps.postId)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadComments() {
    dispatch(fetchComments(ownProps.postId));
  },
  addNew(body, author) {
    const comment = {
      id: UUID(),
      timestamp: Date.now(),
      parentId: ownProps.postId,
      author,
      body
    };
    dispatch(addComment(comment));
  },
  update(id, body) {
    dispatch(updateComment(id, body));
  },
  vote(id, vote) {
    dispatch(voteOnComment(id, vote));
  },
  remove(id) {
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

export default connect(mapStateToProps, mapDispatchToProps)(CommentsSection);
