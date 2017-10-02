import * as ReadableApi from '../util/ReadableApi';
import {
  RECEIVE_POSTS,
  SORT_POSTS_BY,
  VOTE_ON_POST,
  RECEIVE_POST
} from './types';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchAllPosts = () => async dispatch => {
  const posts = await ReadableApi.getAllPosts();
  return dispatch(receivePosts(posts));
};

export const fetchPostsByCategory = category => async dispatch => {
  const posts = await ReadableApi.getPosts(category);
  return dispatch(receivePosts(posts));
};

export const sortPostsBy = sorting => ({
  type: SORT_POSTS_BY,
  sorting
});

export const vote = post => ({
  type: VOTE_ON_POST,
  post
});

export const voteOnPost = (id, voteValue) => async dispatch => {
  const post = await ReadableApi.voteOnPost(id, voteValue);
  return dispatch(vote(post));
};

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const fetchPost = postId => async dispatch => {
  const post = await ReadableApi.getPost(postId);
  return dispatch(receivePost(post));
};
