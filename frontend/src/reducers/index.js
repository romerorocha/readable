import { combineReducers } from 'redux';
import activeMenu from './activeMenu';
import categories from './categories';

export default combineReducers({ categories, activeMenu });
