import React from 'react';
import { Button } from 'semantic-ui-react';

const VoteButtons = ({ voteScore, voteAction }) => {
  return (
    <Button.Group basic floated="right">
      <Button icon="thumbs up" onClick={() => voteAction('upVote')} />
      <Button.Or text={voteScore > 0 ? '+'.concat(voteScore) : voteScore} />
      <Button icon="thumbs down" onClick={() => voteAction('downVote')} />
    </Button.Group>
  );
};

export default VoteButtons;
