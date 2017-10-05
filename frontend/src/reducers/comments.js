import {
  RECEIVE_COMMENTS,
  VOTE_ON_COMMENT,
  ADD_COMMENT
} from '../actions/types';

const commentsReducer = (state = { byId: {} }, action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return {
        ...state,
        byId: action.comments.reduce((acc, value) => {
          acc[value.id] = value;
          return acc;
        }, state.byId)
      };
    case VOTE_ON_COMMENT:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.comment.id]: action.comment
        }
      };
    case ADD_COMMENT:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.comment.id]: action.comment
        }
      };
    default:
      return state;
  }
};

export default commentsReducer;
