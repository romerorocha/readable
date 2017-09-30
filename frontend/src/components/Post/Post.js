import React from 'react';
import { Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import VoteButtons from './VoteButtons';

const Post = ({ post, voteAction }) => {
  const postDate = new Date(post.timestamp).toLocaleString();

  const handleVote = vote => {
    voteAction(post.id, vote);
  };

  return (
    <Item>
      <Item.Image
        size="tiny"
        src={require(`../../img/${post.category}-small.png`)}
      />
      <Item.Content>
        <Link to="/postform">
          <Item.Header className="ui header">{post.title}</Item.Header>
          <Item.Meta>
            <span>
              <strong>{post.author}</strong> - {postDate}
            </span>
          </Item.Meta>
        </Link>
        <Item.Description>{post.body}</Item.Description>
        <Item.Extra>
          <VoteButtons voteScore={post.voteScore} voteAction={handleVote} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default Post;
