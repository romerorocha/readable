import { ACTIVATE_MENU, SORT_POSTS_BY } from './types';

export const activateMenu = menu => ({
  type: ACTIVATE_MENU,
  activeMenu: menu
});

// Posts sorting
export const sortPostsBy = sorting => ({
  type: SORT_POSTS_BY,
  sorting
});
