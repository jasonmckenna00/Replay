import { RECEIVE_CURRENT_USER, RECEIVE_USER, 
        RESET_USER_STATE} from '../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../actions/user_actions';
import { RECEIVE_VIDEO } from '../actions/video_actions';



export default (state = {}, action) => {
  
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_USER:
      // debugger
      return Object.assign({}, state, { [action.user.id]: action.user });
    case RECEIVE_ALL_USERS:
        return action.users
    case RECEIVE_VIDEO:
      // debugger
        if (!action.payload.user) return state
        return Object.assign({}, state, { [action.payload.user.id]: action.payload.user });
    // case RESET_USER_STATE:
    //   return {}
    default:
      return state;
  }
};