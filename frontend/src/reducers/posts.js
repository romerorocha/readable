import { GET_POSTS, SORT_POSTS_BY } from '../actions/index';
import { VOTE_SCORE } from '../util/Constants';

export const posts = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.posts;
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
