import React, { Component } from 'react';
import { connect } from 'react-redux';
import Breadcrumbs from '../../Misc/Breadcrumbs';
import SortedComments from '../../../containers/SortedComments';
import PostBody from './PostBody';
import ActionButtons from '../ActionButtons';
import { Container, Divider } from 'semantic-ui-react';
import { fetchPost, voteOnPost } from '../../../actions/posts';

class PostDetail extends Component {
  componentDidMount() {
    const postId = this.props.match.params.postId;
    this.loadPostsIfNeeded(postId);
  }

  loadPostsIfNeeded = id => {
    if (Object.keys(this.props.posts).length === 0) {
      this.props.loadPost(id);
    }
  };

  render() {
    const { post, votePost } = this.props;

    return post ? (
      <Container>
        <Breadcrumbs category={post.category} post />
        <Divider />
        <ActionButtons
          key="0"
          voteAction={votePost}
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadPost(id) {
    dispatch(fetchPost(id));
  },
  votePost(vote) {
    dispatch(voteOnPost(ownProps.match.params.postId, vote));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
