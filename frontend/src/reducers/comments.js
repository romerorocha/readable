import { RECEIVE_COMMENTS } from '../actions/types';

export const comments = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments.reduce((acc, value) => {
        acc[value.id] = value;
        return acc;
      }, {});
    default:
      return state;
  }
};
