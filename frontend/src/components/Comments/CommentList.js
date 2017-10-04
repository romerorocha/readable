import React from 'react';
import { Comment, Icon } from 'semantic-ui-react';

const CommentList = ({ comments, voteAction }) => {
  return (
    <Comment.Group>
      {comments &&
        comments.map(comment => (
          <Comment key={comment.id}>
            <Comment.Content>
              <Comment.Author as="a">{comment.author}</Comment.Author>
              <Comment.Metadata>
                {new Date(comment.timestamp).toLocaleString()}
              </Comment.Metadata>
              <Comment.Metadata>
                <Icon
                  name={comment.voteScore < 0 ? 'thumbs down' : 'thumbs up'}
                />
              </Comment.Metadata>
              <Comment.Metadata>{comment.voteScore}</Comment.Metadata>
              <Comment.Text>{comment.body}</Comment.Text>
              <Comment.Actions>
                <Comment.Action
                  onClick={() => voteAction(comment.id, 'upVote')}
                >
                  Like
                </Comment.Action>
                <Comment.Action
                  onClick={() => voteAction(comment.id, 'downVote')}
                >
                  Dislike
                </Comment.Action>
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        ))}
    </Comment.Group>
  );
};

export default CommentList;
