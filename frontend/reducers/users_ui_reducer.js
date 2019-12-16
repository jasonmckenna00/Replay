import { RESET_USER_UI_STATE, RECEIVE_USER } from "../actions/session_actions";

export default (state = {}, action) => {
    switch(action.type ){
        case RESET_USER_UI_STATE:
            return {}
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        default: return state;
    }
}

