import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost, voteOnPost, removePost } from '../../actions/posts';
import { activateMenu } from '../../actions/UI';
import Breadcrumbs from '../Misc/Breadcrumbs';
import SortedComments from '../../containers/SortedComments';
import PostBody from './PostBody';
import ActionButtons from './ActionButtons';
import { Container, Divider } from 'semantic-ui-react';

class PostDetail extends Component {
  componentDidMount() {
    this.props.activate('NONE');
    if (Object.keys(this.props.posts).length === 0) {
      this.props.loadPost();
    }
  }

  handleRemoving = () => {
    this.props.remove();
    this.props.history.push('/');
  };

  handleEditing = () => {
    const { id, category, author, title, body } = this.props.post;

    const location = {
      pathname: '/posts/edit',
      state: { id, category, author, title, body }
    };

    this.props.history.push(location);
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
          edit={this.handleEditing}
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
    },
    activate: menu => {
      dispatch(activateMenu(menu));
    }
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostDetail)
);
