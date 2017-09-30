import * as ReadableApi from '../util/ReadableApi';
import { GET_POSTS, SORT_POSTS_BY } from './index';

export const getPosts = posts => ({
  type: GET_POSTS,
  posts: posts
});

export const fetchAllPosts = () => async dispatch => {
  const posts = await ReadableApi.getAllPosts();
  return dispatch(getPosts(posts));
};

export const fetchPostsByCategory = category => async dispatch => {
  const posts = await ReadableApi.getPosts(category);
  return dispatch(getPosts(posts));
};

export const sortPostsBy = sorting => ({
  type: SORT_POSTS_BY,
  sorting: sorting
});
