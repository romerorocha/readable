import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import uiReducer from './UI';
import postsReducer from './posts';
import commentsReducer from './comments';

const entities = combineReducers({
  categories: categoriesReducer,
  posts: postsReducer,
  comments: commentsReducer
});

export default combineReducers({
  entities,
  ui: uiReducer
});
