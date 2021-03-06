import * as API from '../util/PostsAPI';
import {
  RECEIVE_POSTS,
  VOTE_ON_POST,
  RECEIVE_POST,
  REMOVE_POST
} from './types';

const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

const vote = post => ({
  type: VOTE_ON_POST,
  post
});

const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

const remove = post => ({
  type: REMOVE_POST,
  post
});

export const fetchAllPosts = () => async dispatch => {
  const posts = await API.getAllPosts();
  return dispatch(receivePosts(posts));
};

export const fetchPostsByCategory = category => async dispatch => {
  const posts = await API.getPosts(category);
  return dispatch(receivePosts(posts));
};

export const voteOnPost = (id, voteValue) => async dispatch => {
  const post = await API.voteOnPost(id, voteValue);
  return dispatch(vote(post));
};

export const fetchPost = postId => async dispatch => {
  const post = await API.getPost(postId);
  return dispatch(receivePost(post));
};

export const addPost = post => async dispatch => {
  const newPost = await API.addPost(post);
  return dispatch(receivePost(newPost));
};

export const removePost = id => async dispatch => {
  const deletedPost = await API.deletePost(id);
  return dispatch(remove(deletedPost));
};

export const updatePost = post => async dispatch => {
  const updatedPost = await API.updatePost(post.id, post.title, post.body);
  return dispatch(receivePost(updatedPost));
};
