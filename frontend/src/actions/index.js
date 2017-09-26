// const api = 'http://localhost:3001';

// const headers = {
//   Accept: 'application/json',
//   Authorization: 'auth'
// };

import * as ReadableApi from '../util/ReadableApi';

export const ACTIVATE_MENU = 'ACTIVE_MENU';
export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const activateMenu = menu => ({
  type: ACTIVATE_MENU,
  activeMenu: menu
});

export const loadCategories = categories => ({
  type: LOAD_CATEGORIES,
  categories: categories,
  receivedAt: Date.now()
});

export const fetchCategories = () => async dispatch => {
  const categories = await ReadableApi.getCategories();
  return dispatch(loadCategories(categories));
};

// export function fetchCategories() {
//   return function(dispatch) {
//     return fetch(`${api}/categories`, { headers })
//       .then(
//         response => response.json(),
//         error => console.log('An error occured.', error)
//       )
//       .then(data => dispatch(loadCategories(data.categories)));
//   };
// }
