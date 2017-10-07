import { api, headers } from './Constants';

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers }).then(res => res.json());

export const getPosts = category => {
  return fetch(`${api}/${category}/posts`, { headers }).then(res => res.json());
};

export const voteOnPost = (id, vote) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: vote })
  }).then(res => res.json());

export const getPost = id =>
  fetch(`${api}/posts/${id}`, { headers }).then(res => res.json());

export const addPost = post =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json());
