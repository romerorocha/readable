import * as ReadableApi from '../util/ReadableApi';
import { ALL_POSTS } from './index';

export const getAllPosts = posts => ({
  type: ALL_POSTS,
  posts: posts,
  receivedAt: Date.now()
});

export const fetchAllPosts = () => async dispatch => {
  const posts = await ReadableApi.getAllPosts();
  return dispatch(getAllPosts(posts));
};
