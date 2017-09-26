import { LOAD_CATEGORIES, ACTIVATE_MENU } from '../actions';
import { combineReducers } from 'redux';

function activeMenu(state = 'home', action) {
  switch (action.type) {
    case ACTIVATE_MENU:
      return action.activeMenu;
    default:
      return state;
  }
}

function categories(state = [], action) {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return action.categories;
    default:
      return state;
  }
}

export default combineReducers({ categories, activeMenu });
