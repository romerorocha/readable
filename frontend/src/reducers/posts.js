import {
  GET_POSTS,
  SORT_POSTS_BY,
  VOTE_ON_POST,
  GET_POST
} from '../actions/types';
import { VOTE_SCORE } from '../util/Constants';

/* Posts array is converted to a hash {id: {post}}, 
   to make add/update/delete actions easier and perform better.
   No need for mapping or filtering over the whole array everytime,
   don't know why the server uses the same logic but returns an array.
*/
export const posts = (state = {}, action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.posts.reduce((acc, value) => {
        acc[value.id] = value;
        return acc;
      }, {});
    case VOTE_ON_POST:
      return {
        ...state,
        [action.post.id]: action.post
      };
    default:
      return state;
  }
};

export const postsSorting = (state = VOTE_SCORE, action) => {
  switch (action.type) {
    case SORT_POSTS_BY:
      return action.sorting;
    default:
      return state;
  }
};

export const activePost = (state = {}, action) => {
  switch (action.type) {
    case GET_POST:
      return action.post;
    default:
      return state;
  }
};
