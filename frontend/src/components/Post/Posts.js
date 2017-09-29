import React from 'react';
import Post from './Post';
import { TIMESTAMP, VOTE_SCORE } from '../../util/Constants';
import { Card, Container, Button, Divider } from 'semantic-ui-react';

const Posts = ({ posts, sortBy }) => {
  const handleSorting = (e, target) => {
    sortBy(target.name.toUpperCase());
  };

  return (
    <Container>
      <Button.Group basic attached="bottom">
        <Button name="vote_score" onClick={handleSorting}>
          Sort by votes
        </Button>
        <Button.Or />
        <Button name="timestamp" onClick={handleSorting}>
          Sort by date
        </Button>
      </Button.Group>
      <Divider />
      <Card.Group itemsPerRow="1" stackable>
        {posts.map(post => <Post key={post.id} post={post} />)}
      </Card.Group>
    </Container>
  );
};

export default Posts;
