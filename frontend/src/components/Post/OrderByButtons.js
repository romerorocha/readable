import React from 'react';
import { connect } from 'react-redux';
import { sortPostsBy } from '../../actions/UI';
import { TIMESTAMP, VOTE_SCORE } from '../../util/Constants';
import { Button, Container } from 'semantic-ui-react';

const OrderByButtons = ({ sortBy, sorting }) => {
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
          content="Sort by votes"
        />
        <Button.Or />
        <Button
          name={TIMESTAMP}
          onClick={handleSorting}
          active={sorting === TIMESTAMP}
          content="Sort by date"
        />
      </Button.Group>
    </Container>
  );
};

const mapStateToProps = state => ({
  sorting: state.ui.postsSorting
});

const mapDispatchToProps = dispatch => ({
  sortBy(sortBy) {
    dispatch(sortPostsBy(sortBy));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderByButtons);
