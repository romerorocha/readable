import { RECEIVE_POSTS, VOTE_ON_POST, RECEIVE_POST } from '../actions/types';

const initialState = {
  byId: {},
  selectedPost: {}
};

const postsReducer = (state = initialState, action) => {
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

export default postsReducer;
