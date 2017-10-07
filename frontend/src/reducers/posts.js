import {
  RECEIVE_POSTS,
  RECEIVE_POST,
  VOTE_ON_POST,
  REMOVE_POST
} from '../actions/types';

const postsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return addAllPostsById(action);
    case RECEIVE_POST:
      return addPostById(state, action);
    case VOTE_ON_POST:
      return setVoteScore(state, action);
    case REMOVE_POST:
      return deletePost(state, action);
    default:
      return state;
  }
};

export default postsReducer;

function addPostById(state, action) {
  return {
    ...state,
    [action.post.id]: action.post
  };
}

function setVoteScore(state, action) {
  return {
    ...state,
    [action.post.id]: {
      ...state[action.post.id],
      voteScore: action.post.voteScore
    }
  };
}

function addAllPostsById(action) {
  return action.posts.reduce((acc, value) => {
    acc[value.id] = value;
    return acc;
  }, {});
}

function deletePost(state, action) {
  let nextState = { ...state };
  delete nextState[action.post.id];
  return nextState;
}
