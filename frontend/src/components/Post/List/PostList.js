import React from 'react';
import PostItem from './PostItem';
import { Item, Container } from 'semantic-ui-react';
import OrderByButtons from './OrderByButtons';

const PostList = ({ posts, voteAction }) => {
  return (
    <Container fluid>
      <OrderByButtons />
      <Item.Group divided>
        {posts.map(post => (
          <PostItem key={post.id} post={post} voteAction={voteAction} />
        ))}
      </Item.Group>
    </Container>
  );
};

export default PostList;
