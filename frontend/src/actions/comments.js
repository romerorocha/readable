import * as ReadableApi from '../util/ReadableApi';
import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
  VOTE_ON_COMMENT
} from './types';

const receiveComments = (comments, parentId) => ({
  type: RECEIVE_COMMENTS,
  parentId,
  comments
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const remove = comment => ({
  type: REMOVE_COMMENT,
  comment
});

const vote = comment => ({
  type: VOTE_ON_COMMENT,
  comment
});

export const fetchComments = postId => async dispatch => {
  const comments = await ReadableApi.getComments(postId);
  return dispatch(receiveComments(comments, postId));
};

export const addComment = comment => async dispatch => {
  const newComment = await ReadableApi.addComment(comment);
  return dispatch(receiveComment(newComment));
};

export const updateComment = (id, body) => async dispatch => {
  const comment = await ReadableApi.updateComment(id, body);
  return dispatch(receiveComment(comment));
};

export const removeComment = id => async dispatch => {
  const deletedComment = await ReadableApi.deleteComment(id);
  return dispatch(remove(deletedComment));
};

export const voteOnComment = (id, voteValue) => async dispatch => {
  const comment = await ReadableApi.voteOnComment(id, voteValue);
  return dispatch(vote(comment));
};
