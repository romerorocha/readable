import {
  RECEIVE_POSTS,
  SORT_POSTS_BY,
  VOTE_ON_POST,
  RECEIVE_POST
} from '../actions/types';
import { VOTE_SCORE } from '../util/Constants';

const initialState = {
  byId: {},
  selectedPost: {}
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        byId: action.posts.reduce((acc, value) => {
          acc[value.id] = value;
          return acc;
        }, {})
      };
    case VOTE_ON_POST:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.post.id]: action.post
        }
      };
    case RECEIVE_POST:
      return {
        ...state,
        selectedPost: action.post
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
