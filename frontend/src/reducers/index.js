import { combineReducers } from 'redux';
import activeMenu from './activeMenu';
import categories from './categories';
import { posts, postsSortedBy } from './posts';

export default combineReducers({
  activeMenu,
  categories,
  posts,
  postsSortedBy
});
