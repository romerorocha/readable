import React from 'react';
import { connect } from 'react-redux';
import { sortPostsBy } from '../../actions/posts';
import { TIMESTAMP, VOTE_SCORE } from '../../util/Constants';
import { Button, Container } from 'semantic-ui-react';

const SortByBar = ({ sortBy, sorting }) => {
  const handleSorting = (e, target) => {
    sortBy(target.name);
  };

  return (
    <Container textAlign="center">
      <Button.Group size="small">
        <Button
          name={VOTE_SCORE}
          onClick={handleSorting}
          active={sorting === VOTE_SCORE}
        >
          Sort by votes
        </Button>
        <Button.Or />
        <Button
          name={TIMESTAMP}
          onClick={handleSorting}
          active={sorting === TIMESTAMP}
        >
          Sort by date
        </Button>
      </Button.Group>
    </Container>
  );
};

const mapStateToProps = state => ({
  sorting: state.postsSorting
});

const mapDispatchToProps = dispatch => ({
  sortBy(sortBy) {
    dispatch(sortPostsBy(sortBy));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SortByBar);