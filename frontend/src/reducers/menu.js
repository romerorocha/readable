import { ACTIVATE_MENU } from '../actions/types';
import { ALL_POSTS } from '../util/Constants';

const activeMenu = (state = ALL_POSTS, action) => {
  switch (action.type) {
    case ACTIVATE_MENU:
      return action.activeMenu;
    default:
      return state;
  }
};

export default activeMenu;
