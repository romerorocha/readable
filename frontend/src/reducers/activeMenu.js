import { ACTIVATE_MENU } from '../actions/types';

function activeMenu(state = '/', action) {
  switch (action.type) {
    case ACTIVATE_MENU:
      return action.activeMenu;
    default:
      return state;
  }
}

export default activeMenu;
