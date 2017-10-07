import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT,
  VOTE_ON_COMMENT
} from '../actions/types';

export const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return addCommentsToParentId(state, action);
    case RECEIVE_COMMENT:
      return addCommentToParentId(state, action);
    case REMOVE_COMMENT:
      return deleteComment(state, action);
    case VOTE_ON_COMMENT:
      return setVoteScore(state, action);
    default:
      return state;
  }
};

export default commentsReducer;

function addCommentsToParentId(state, action) {
  return {
    ...state,
    [action.parentId]: action.comments.reduce((acc, value) => {
      acc[value.id] = value;
      return acc;
    }, {})
  };
}

function deleteComment(state, action) {
  let nextState = { ...state };
  delete nextState[action.comment.parentId][action.comment.id];
  return nextState;
}

function addCommentToParentId(state, action) {
  return {
    ...state,
    [action.comment.parentId]: {
      ...state[action.comment.parentId],
      [action.comment.id]: action.comment
    }
  };
}

function setVoteScore(state, action) {
  return {
    ...state,
    [action.comment.parentId]: {
      ...state[action.comment.parentId],
      [action.comment.id]: {
        ...state[action.comment.parentId][action.comment.id],
        voteScore: action.comment.voteScore
      }
    }
  };
}
