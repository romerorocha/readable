import * as ReadableApi from '../util/ReadableApi';
import { RECEIVE_CATEGORIES } from './types';

const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories: categories
});

export const fetchCategories = () => async dispatch => {
  const categories = await ReadableApi.getCategories();
  return dispatch(receiveCategories(categories));
};
