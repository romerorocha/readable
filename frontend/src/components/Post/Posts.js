import React from 'react';
import Post from './Post';
import { Item, Container } from 'semantic-ui-react';
import OrderByButtons from './OrderByButtons';

const Posts = ({ posts, voteAction }) => {
  return (
    <Container fluid>
      <OrderByButtons />
      <Item.Group divided>
        {posts.map(post => (
          <Post key={post.id} post={post} voteAction={voteAction} />
        ))}
      </Item.Group>
    </Container>
  );
};

export default Posts;
