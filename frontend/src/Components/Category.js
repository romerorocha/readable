import React from 'react';
import { Container } from 'semantic-ui-react';

const Category = ({ match }) => {
  const title = match.params.title;

  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
};

export default Category;
