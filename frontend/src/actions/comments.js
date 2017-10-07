import * as API from '../util/CommentsAPI';
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
  const comments = await API.getComments(postId);
  return dispatch(receiveComments(comments, postId));
};

export const addComment = comment => async dispatch => {
  const newComment = await API.addComment(comment);
  return dispatch(receiveComment(newComment));
};

export const updateComment = (id, body) => async dispatch => {
  const comment = await API.updateComment(id, body);
  return dispatch(receiveComment(comment));
};

export const removeComment = id => async dispatch => {
  const deletedComment = await API.deleteComment(id);
  return dispatch(remove(deletedComment));
};

export const voteOnComment = (id, voteValue) => async dispatch => {
  const comment = await API.voteOnComment(id, voteValue);
  return dispatch(vote(comment));
};
