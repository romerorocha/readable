import * as ReadableApi from '../util/ReadableApi';
import {
  RECEIVE_COMMENTS,
  VOTE_ON_COMMENT,
  ADD_COMMENT,
  REMOVE_COMMENT,
  UPDATE_COMMENT
} from './types';

//Get All
export const receiveComments = (comments, parentId) => ({
  type: RECEIVE_COMMENTS,
  parentId,
  comments
});

export const fetchComments = postId => async dispatch => {
  const comments = await ReadableApi.getComments(postId);
  return dispatch(receiveComments(comments, postId));
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

// Add
export const add = comment => ({
  type: ADD_COMMENT,
  comment
});

export const addComment = comment => async dispatch => {
  const newComment = await ReadableApi.addComment(comment);
  return dispatch(add(newComment));
};

// Remove
export const remove = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const removeComment = id => async dispatch => {
  const deletedComment = await ReadableApi.deleteComment(id);
  return dispatch(remove(deletedComment));
};

// update a comment
export const update = comment => ({
  type: UPDATE_COMMENT,
  comment
});

export const updateComment = (id, body) => async dispatch => {
  const comment = await ReadableApi.updateComment(id, body);
  return dispatch(update(comment));
};
