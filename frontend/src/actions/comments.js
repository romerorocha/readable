import * as ReadableApi from '../util/ReadableApi';
import { RECEIVE_COMMENTS } from './types';

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const fetchComments = postId => async dispatch => {
  const comments = await ReadableApi.getComments(postId);
  return dispatch(receiveComments(comments));
};
