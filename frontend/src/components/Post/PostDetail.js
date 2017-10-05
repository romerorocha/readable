import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, voteOnPost } from '../../actions/posts';
import Breadcrumbs from '../Breadcrumbs';
import CommentsSection from '../Comments/CommentsSection';
import PostContent from './PostContent';
import ActionButtons from './ActionButtons';
import { Container, Divider } from 'semantic-ui-react';

class PostDetail extends Component {
  componentDidMount() {
    const postId = this.props.match.params.postId;
    this.loadPostsIfNeeded(postId);
  }

  loadPostsIfNeeded = id => {
    if (Object.keys(this.props.posts.byId).length === 0) {
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
        <PostContent post={post} />
        <CommentsSection postId={post.id} />
      </Container>
    ) : (
      false
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: state.posts.byId[ownProps.match.params.postId],
  posts: state.posts
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
