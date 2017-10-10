import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchComments } from '../../actions/comments';
import { voteOnPost, removePost } from '../../actions/posts';
import { Link } from 'react-router-dom';
import ActionButtons from './ActionButtons';
import { Item, Icon } from 'semantic-ui-react';

class PostItem extends Component {
  componentDidMount() {
    this.props.loadComments();
  }

  handleEditing = () => {
    const { id, category, author, title, body } = this.props.post;
    const location = {
      pathname: '/posts/edit',
      state: { id, category, author, title, body }
    };

    this.props.history.push(location);
  };

  render() {
    const { post, numberOfComments, remove, vote } = this.props;
    const postDate = new Date(post.timestamp).toLocaleString();

    return (
      <Item>
        <Item.Image
          size="tiny"
          src={require(`./img/${post.category}-small.png`)}
        />
        <Item.Content>
          <Link to={`/${post.category}/${post.id}`}>
            <Item.Header className="ui header">{post.title}</Item.Header>
            <Item.Meta>
              <span>
                <strong>{post.author}</strong> - {postDate}
              </span>
            </Item.Meta>
          </Link>
          <Item.Description>
            <span>
              Comments: {numberOfComments}{' '}
              {numberOfComments >= 5 ? <Icon name="fire" color="red" /> : null}
            </span>
          </Item.Description>
          <Item.Extra>
            <ActionButtons
              voteScore={post.voteScore}
              remove={remove}
              vote={vote}
              edit={this.handleEditing}
            />
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const postWithComments = state.entities.comments[ownProps.post.id];

  return {
    numberOfComments: postWithComments
      ? Object.keys(postWithComments).length
      : 0
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadComments() {
    dispatch(fetchComments(ownProps.post.id));
  },
  vote(vote) {
    dispatch(voteOnPost(ownProps.post.id, vote));
  },
  remove() {
    dispatch(removePost(ownProps.post.id));
  }
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PostItem)
);
