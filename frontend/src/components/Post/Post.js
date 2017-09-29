import React from 'react';
import { Image, Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const postDate = new Date(post.timestamp).toLocaleString();

  return (
    <Card>
      <Card.Content>
        <Image floated="right" size="mini" src={require(`../../img/${post.category}.png`)} />
        <Link to="/postform">
          <Card.Header className="ui header">{post.title}</Card.Header>
          <Card.Meta>
            <strong>{post.author}</strong> in {postDate}
          </Card.Meta>
          <Card.Description>{post.body}</Card.Description>
        </Link>
      </Card.Content>
      <Card.Content extra>
        <Link to="/postform">
          <Button content="Delete" icon="remove" labelPosition="left" size="small" />
        </Link>
        <Button
          content="Vote"
          icon="heart"
          label={{ as: 'a', basic: true, content: post.voteScore }}
          labelPosition="right"
          size="small"
        />
      </Card.Content>
    </Card>
  );
};

export default Post;
