import { RECEIVE_CURRENT_USER, RECEIVE_USER, 
        RESET_USER_STATE} from '../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../actions/user_actions';



export default (state = {}, action) => {
  
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_ALL_USERS:
        return action.users
    // case RESET_USER_STATE:
    //   return {}
    default:
      return state;
  }
};