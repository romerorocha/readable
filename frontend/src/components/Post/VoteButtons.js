import React from 'react';
import { Button } from 'semantic-ui-react';

const VoteButtons = ({ voteScore }) => {
  return (
    <Button.Group basic floated="right">
      <Button icon="thumbs up" />
      <Button.Or text={voteScore > 0 ? '+'.concat(voteScore) : voteScore} />
      <Button icon="thumbs down" />
    </Button.Group>
  );
};

export default VoteButtons;
