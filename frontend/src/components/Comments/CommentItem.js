import React from 'react';
import { Comment, Icon, Button } from 'semantic-ui-react';

const CommentItem = ({ comment, voteAction, removeAction, editAction }) => {
  return (
    <Comment>
      <Comment.Content>
        <Comment.Author as="label">{comment.author}</Comment.Author>
        <Comment.Metadata>
          {new Date(comment.timestamp).toLocaleString()}
        </Comment.Metadata>
        <Comment.Metadata>
          <Icon name={comment.voteScore < 0 ? 'thumbs down' : 'thumbs up'} />
        </Comment.Metadata>
        <Comment.Metadata>
          <strong>{comment.voteScore}</strong>
        </Comment.Metadata>
        <Comment.Text className="display-linebreak">
          {comment.body}
        </Comment.Text>
        <Comment.Actions>
          <Button.Group basic>
            <Comment.Action
              as={Button}
              size="tiny"
              icon="thumbs up"
              onClick={() => voteAction(comment.id, 'upVote')}
            />
            <Comment.Action
              as={Button}
              size="tiny"
              icon="thumbs down"
              onClick={() => voteAction(comment.id, 'downVote')}
            />
            <Comment.Action
              as={Button}
              size="tiny"
              icon="trash"
              onClick={() => removeAction(comment.id)}
            />
            <Comment.Action
              as={Button}
              size="tiny"
              icon="write"
              onClick={() => editAction(comment)}
            />
          </Button.Group>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
};

export default CommentItem;
