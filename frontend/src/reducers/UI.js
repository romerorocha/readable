import { ACTIVATE_MENU, SORT_POSTS_BY } from '../actions/types';
import { ALL_POSTS } from '../util/Constants';
import { SORTING } from '../util/Constants';

const initialState = {
  activeMenu: ALL_POSTS,
  postsSorting: SORTING.VOTE_SCORE
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVATE_MENU:
      return {
        ...state,
        activeMenu: action.activeMenu
      };
    case SORT_POSTS_BY:
      return {
        ...state,
        postsSorting: action.sorting
      };
    default:
      return state;
  }
};

export default uiReducer;
