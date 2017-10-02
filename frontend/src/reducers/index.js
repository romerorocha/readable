import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import uiReducer from './ui';
import postsReducer from './posts';
import commentsReducer from './comments';

export default combineReducers({
  categories: categoriesReducer,
  posts: postsReducer,
  comments: commentsReducer,
  ui: uiReducer
});
