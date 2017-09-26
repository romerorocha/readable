import React from 'react';
import { Container } from 'semantic-ui-react';

const Category = ({ match }) => {
  const title = match.params.category;

  return (
    <Container fluid>
      <h1>{title}</h1>
    </Container>
  );
};

export default Category;
