import React, { Component } from 'react';
import AddModal from './AddModal';
import { Header } from 'semantic-ui-react';
import CommentList from './CommentList';
import { connect } from 'react-redux';
import { fetchComments, voteOnComment } from '../../actions/comments';

class Comments extends Component {
  componentWillMount() {
    this.props.loadComments();
  }

  render() {
    const { postId, comments, voteComment } = this.props;
    return [
      <Header key="0" as="h3" dividing>
        Comments ({comments.length})
      </Header>,
      <AddModal key="1" postId={postId} />,
      <CommentList key="2" comments={comments} voteAction={voteComment} />
    ];
  }
}

const mapStateToProps = state => ({
  comments: getSortedComments(
    Object.keys(state.comments).map(key => state.comments[key])
  )
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadComments() {
    dispatch(fetchComments(ownProps.postId));
  },
  voteComment(id, vote) {
    dispatch(voteOnComment(id, vote));
  }
});

const getSortedComments = comments => {
  return comments.slice().sort((a, b) => b.voteScore - a.voteScore);
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
