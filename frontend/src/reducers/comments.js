import { RECEIVE_COMMENTS, VOTE_ON_COMMENT } from '../actions/types';

const commentsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments.reduce((acc, value) => {
        acc[value.id] = value;
        return acc;
      }, {});
    case VOTE_ON_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      };
    default:
      return state;
  }
};

export default commentsReducer;
