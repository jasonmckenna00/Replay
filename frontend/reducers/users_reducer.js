import { RECEIVE_CURRENT_USER,
       RECEIVE_USER_BY_EMAIL,
        RESET_USER_STATE} from '../actions/session_actions';


export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_USER_BY_EMAIL:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RESET_USER_STATE:
      return {}
    default:
      return state;
  }
};