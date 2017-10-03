import React from 'react';
import { Container, Header, Icon } from 'semantic-ui-react';

const PostContent = ({ post }) => {
  const postDate = new Date(post.timestamp).toLocaleString();

  return (
    <Container fluid>
      <Header as="h1">{post.title}</Header>
      <p>
        <Icon name="user" />
        <strong>{post.author}</strong>
      </p>
      <p>
        <Icon name="calendar" />
        <strong>{postDate}</strong>
      </p>
      <p>{post.body}</p>
    </Container>
  );
};

export default PostContent;
