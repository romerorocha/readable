import React from 'react';
import AddModal from './AddModal';
import { Header } from 'semantic-ui-react';
import CommentList from './CommentList';

const Comments = ({ comments, postId, voteAction }) => {
  return [
    <Header key="0" as="h3" dividing>
      Comments ({comments.length})
    </Header>,
    <AddModal key="1" postId={postId} />,
    <CommentList key="2" comments={comments} voteAction={voteAction} />
  ];
};

export default Comments;
