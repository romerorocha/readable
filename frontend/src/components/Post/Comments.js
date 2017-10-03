import React from 'react';
import { Comment, Header, Icon } from 'semantic-ui-react';

const Comments = ({ comments, voteAction }) => {
  return [
    <Header key="0" as="h3" dividing>
      Comments ({comments.length})
    </Header>,
    <Comment.Group key="1">
      {comments.map(comment => {
        return (
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
        );
      })}
    </Comment.Group>
  ];
};

export default Comments;
