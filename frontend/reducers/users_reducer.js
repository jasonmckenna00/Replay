import { RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_USER_BY_EMAIL}  from '../actions/session_actions';
export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_USER_BY_EMAIL:
      return Object.assign({}, state, { [action.user.id]: action.user })
    default:
      return {};
  }
};