import React from 'react';
import Post from './Post';
import { Item, Container } from 'semantic-ui-react';
import OrderByButtons from './OrderByButtons';

const Posts = ({ posts }) => {
  return (
    <Container fluid>
      <OrderByButtons />
      <Item.Group divided>
        {posts.map(post => <Post key={post.id} post={post} />)}
      </Item.Group>
    </Container>
  );
};

export default Posts;
