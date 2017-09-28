const api = 'http://localhost:3001';

const headers = {
  Accept: 'application/json',
  Authorization: 'auth'
};

export const getCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories);

export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers }).then(res => res.json());
