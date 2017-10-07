import React from 'react';
import { Button } from 'semantic-ui-react';

const ActionButtons = ({ voteScore, vote, edit, remove }) => {
  return (
    <Button.Group basic floated="right">
      <Button icon="thumbs up" onClick={() => vote('upVote')} circular />
      <Button.Or text={voteScore > 0 ? '+'.concat(voteScore) : voteScore} />
      <Button icon="thumbs down" onClick={() => vote('downVote')} circular />
      <Button icon="write" onClick={edit} />
      <Button icon="trash" onClick={remove} />
    </Button.Group>
  );
};

export default ActionButtons;
