import * as ReadableApi from '../util/ReadableApi';
import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT } from './types';

// Load all comments of a post
const receiveComments = (comments, parentId) => ({
  type: RECEIVE_COMMENTS,
  parentId,
  comments
});

const remove = comment => ({
  type: REMOVE_COMMENT,
  comment
});

// Load comment returned by API's add, update and vote.
const receive = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

// Thunks - Async fetching / Actions
export const fetchComments = postId => async dispatch => {
  const comments = await ReadableApi.getComments(postId);
  return dispatch(receiveComments(comments, postId));
};

export const addComment = comment => async dispatch => {
  const newComment = await ReadableApi.addComment(comment);
  return dispatch(receive(newComment));
};

export const updateComment = (id, body) => async dispatch => {
  const comment = await ReadableApi.updateComment(id, body);
  return dispatch(receive(comment));
};

export const removeComment = id => async dispatch => {
  const deletedComment = await ReadableApi.deleteComment(id);
  return dispatch(remove(deletedComment));
};

export const voteOnComment = (id, voteValue) => async dispatch => {
  const comment = await ReadableApi.voteOnComment(id, voteValue);
  return dispatch(receive(comment));
};
