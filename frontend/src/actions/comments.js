import * as ReadableApi from '../util/ReadableApi';
import { RECEIVE_COMMENTS, VOTE_ON_COMMENT } from './types';

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const fetchComments = postId => async dispatch => {
  const comments = await ReadableApi.getComments(postId);
  return dispatch(receiveComments(comments));
};

// Vote
export const vote = comment => ({
  type: VOTE_ON_COMMENT,
  comment
});

export const voteOnComment = (id, voteValue) => async dispatch => {
  const comment = await ReadableApi.voteOnComment(id, voteValue);
  return dispatch(vote(comment));
};
