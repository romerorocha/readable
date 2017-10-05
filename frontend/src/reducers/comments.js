import {
  RECEIVE_COMMENTS,
  VOTE_ON_COMMENT,
  ADD_COMMENT,
  REMOVE_COMMENT
} from '../actions/types';

const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      if (action.comments.length === 0) {
        return {
          ...state,
          [action.parentId]: {}
        };
      }
      return {
        ...state,
        [action.parentId]: action.comments.reduce((acc, value) => {
          acc[value.id] = value;
          return acc;
        }, {})
      };
    case VOTE_ON_COMMENT:
      return {
        ...state,
        [action.comment.parentId]: {
          ...state[action.comment.parentId],
          [action.comment.id]: action.comment
        }
      };
    case ADD_COMMENT:
      return {
        ...state,
        [action.comment.parentId]: {
          ...state[action.comment.parentId],
          [action.comment.id]: action.comment
        }
      };
    case REMOVE_COMMENT:
      delete state[action.comment.parentId][action.comment.id];
      return {
        ...state
      };
    default:
      return state;
  }
};

export default commentsReducer;
