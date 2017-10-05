import React from 'react';
import { Comment, Icon } from 'semantic-ui-react';

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
        <Comment.Metadata>{comment.voteScore}</Comment.Metadata>
        <Comment.Text>{comment.body}</Comment.Text>
        <Comment.Actions>
          <Comment.Action onClick={() => voteAction(comment.id, 'upVote')}>
            Like
          </Comment.Action>
          <Comment.Action onClick={() => voteAction(comment.id, 'downVote')}>
            Dislike
          </Comment.Action>
          <Comment.Action onClick={() => removeAction(comment.id)}>
            Delete
          </Comment.Action>
          <Comment.Action onClick={() => editAction(comment)}>
            Edit
          </Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  );
};

export default CommentItem;
