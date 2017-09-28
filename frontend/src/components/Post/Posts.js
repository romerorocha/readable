import React from 'react';
import Post from './Post';
import { Card } from 'semantic-ui-react';

const Posts = ({ posts }) => {
  return Object.keys(posts).length !== 0 ? (
    <Card.Group itemsPerRow="2" stackable>
      {posts.map(post => <Post key={post.id} post={post} />)}
    </Card.Group>
  ) : null;
};

export default Posts;
