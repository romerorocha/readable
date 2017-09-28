import React from 'react';
import { Image, Button, Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  return (
    <Card>
      <Card.Content>
        <Image floated="right" size="mini" src={require(`../../img/${post.category}.png`)} />
        <Card.Header>{post.title}</Card.Header>
        <Card.Meta>{post.author}</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to="/postform">
          <Button content="Edit" icon="write" labelPosition="left" size="small" />
        </Link>
        <Link to="/postform">
          <Button content="Delete" icon="remove" labelPosition="left" size="small" />
        </Link>
        <Button
          content="Vote"
          icon="heart"
          label={{ as: 'a', basic: true, content: '2,048' }}
          labelPosition="right"
          size="small"
        />
      </Card.Content>
    </Card>
  );
};

export default Post;
