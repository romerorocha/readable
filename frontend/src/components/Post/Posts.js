import React from 'react';
import Post from './Post';
import { Item, Container } from 'semantic-ui-react';
import SortByBar from './SortByBar';

const Posts = ({ posts }) => {
  return (
    <Container fluid>
      <SortByBar />
      <Item.Group divided>
        {posts.map(post => <Post key={post.id} post={post} />)}
      </Item.Group>
    </Container>
  );
};

export default Posts;
