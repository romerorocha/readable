const api = 'http://localhost:3001';

const headers = {
  Accept: 'application/json',
  Authorization: 'auth'
};

// Categories
export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

// Posts
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

// Comments
export const getComments = postId =>
  fetch(`${api}/posts/${postId}/comments`, { headers }).then(res => res.json());

export const voteOnComment = (id, vote) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: vote })
  }).then(res => res.json());

export const addComment = comment =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(res => res.json());
