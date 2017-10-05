import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '../../actions/comments';
import { Link } from 'react-router-dom';
import ActionButtons from './ActionButtons';
import { Item } from 'semantic-ui-react';

class Post extends Component {
  componentWillMount() {
    this.props.loadComments();
  }

  handleVote = vote => {
    const { post, voteAction } = this.props;
    voteAction(post.id, vote);
  };

  render() {
    const { post, comments } = this.props;
    const postDate = new Date(post.timestamp).toLocaleString();
    return (
      <Item>
        <Item.Image
          size="tiny"
          src={require(`../../img/${post.category}-small.png`)}
        />
        <Item.Content>
          <Link to={`/${post.category}/${post.id}`}>
            <Item.Header className="ui header">{post.title}</Item.Header>
            <Item.Meta>
              <span>
                <strong>{post.author}</strong> - {postDate}
              </span>
            </Item.Meta>
            <Item.Meta>
              <span>
                <strong>{comments.length} comments.</strong>
              </span>
            </Item.Meta>
          </Link>
          <Item.Description>{post.body}</Item.Description>
          <Item.Extra>
            <ActionButtons
              voteScore={post.voteScore}
              voteAction={this.handleVote}
            />
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  comments: Object.keys(state.comments.byId)
    .map(key => state.comments.byId[key])
    .filter(comment => comment.parentId === ownProps.post.id)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadComments() {
    dispatch(fetchComments(ownProps.post.id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);
