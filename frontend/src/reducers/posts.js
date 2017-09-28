import { ALL_POSTS } from '../actions/index';

const posts = (state = [], action) => {
  switch (action.type) {
    case ALL_POSTS:
      return action.posts;
    default:
      return state;
  }
};

export default posts;
