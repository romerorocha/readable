import * as API from '../util/CategoriesAPI';
import { RECEIVE_CATEGORIES } from './types';

const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories: categories
});

export const fetchCategories = () => async dispatch => {
  const categories = await API.getCategories();
  return dispatch(receiveCategories(categories));
};
