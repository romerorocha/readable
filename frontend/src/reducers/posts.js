import { GET_POSTS, SORT_POSTS_BY, VOTE_ON_POST } from '../actions/types';
import { VOTE_SCORE } from '../util/Constants';

export const posts = (state = [], action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.posts;
    case VOTE_ON_POST:
      return state.map(post => {
        if (post.id === action.post.id) {
          post.voteScore = action.post.voteScore;
        }
        return post;
      });

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
