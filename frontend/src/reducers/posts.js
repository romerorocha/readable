import { RECEIVE_POSTS, RECEIVE_POST, VOTE_ON_POST } from '../actions/types';

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts.reduce((acc, value) => {
        acc[value.id] = value;
        return acc;
      }, {});
    case VOTE_ON_POST:
      return {
        ...state,
        [action.post.id]: action.post
      };
    case RECEIVE_POST:
      return {
        ...state,
        [action.post.id]: action.post
      };
    default:
      return state;
  }
};

export default postsReducer;
