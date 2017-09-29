import React from 'react';
import { Button, Item } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const postDate = new Date(post.timestamp).toLocaleString();

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
              <strong>{post.author}</strong> in {postDate}
            </span>
          </Item.Meta>
        </Link>
        <Item.Description>{post.body}</Item.Description>
        <Item.Extra>
          <Link to="/postform">
            <Button
              content="Vote"
              icon="heart"
              label={{ basic: true, content: post.voteScore }}
              labelPosition="right"
              size="small"
            />
          </Link>
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default Post;
