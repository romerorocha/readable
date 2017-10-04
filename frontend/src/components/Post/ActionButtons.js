import React from 'react';
import { Button } from 'semantic-ui-react';

const ActionButtons = ({ voteScore, voteAction }) => {
  return (
    <Button.Group basic floated="right">
      <Button icon="thumbs up" onClick={() => voteAction('upVote')} circular />
      <Button.Or text={voteScore > 0 ? '+'.concat(voteScore) : voteScore} />
      <Button
        icon="thumbs down"
        onClick={() => voteAction('downVote')}
        circular
      />
      <Button icon="write" />
      <Button icon="trash" />
    </Button.Group>
  );
};

export default ActionButtons;
