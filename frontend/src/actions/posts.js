import * as ReadableApi from '../util/ReadableApi';
import { GET_POSTS, SORT_POSTS_BY, VOTE_ON_POST, GET_POST } from './types';

export const getPosts = posts => ({
  type: GET_POSTS,
  posts
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
  sorting
});

export const voteFor = post => ({
  type: VOTE_ON_POST,
  post
});

export const voteOnPost = (id, vote) => async dispatch => {
  const post = await ReadableApi.voteOnPost(id, vote);
  return dispatch(voteFor(post));
};

export const getPost = post => ({
  type: GET_POST,
  post
});

export const fetchPost = postId => async dispatch => {
  const post = await ReadableApi.getPost(postId);
  return dispatch(getPost(post));
};
