import { combineReducers } from 'redux';
import activeMenu from './menu';
import categories from './categories';
import { posts, postsSorting, post } from './posts';
import { comments } from './comments';

export default combineReducers({
  activeMenu,
  categories,
  posts,
  postsSorting,
  post,
  comments
});
