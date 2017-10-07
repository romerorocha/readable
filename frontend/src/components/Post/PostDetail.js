import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Breadcrumbs from '../Misc/Breadcrumbs';
import SortedComments from '../../containers/SortedComments';
import PostBody from './PostBody';
import ActionButtons from './ActionButtons';
import { Container, Divider } from 'semantic-ui-react';
import { fetchPost, voteOnPost, removePost } from '../../actions/posts';

class PostDetail extends Component {
  componentDidMount() {
    if (Object.keys(this.props.posts).length === 0) {
      this.props.loadPost();
    }
  }

  handleRemoving = () => {
    this.props.remove();
    this.props.history.push('/');
  };

  render() {
    const { post, votePost } = this.props;

    return post ? (
      <Container style={{ marginTop: '7em' }}>
        <Breadcrumbs category={post.category} post />
        <Divider />
        <ActionButtons
          key="0"
          vote={votePost}
          remove={this.handleRemoving}
          voteScore={post.voteScore}
        />
        <PostBody post={post} />
        <SortedComments postId={post.id} />
      </Container>
    ) : (
      false
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: state.entities.posts[ownProps.match.params.postId],
  posts: state.entities.posts
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const { postId } = ownProps.match.params;

  return {
    loadPost: () => {
      dispatch(fetchPost(postId));
    },
    votePost: vote => {
      dispatch(voteOnPost(postId, vote));
    },
    remove: () => {
      dispatch(removePost(postId));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostDetail)
);
