import {RECEIVE_USER_ERRORS, CLEAR_ERRORS} from '../actions/session_actions' 

export default (oldState = [], action) => {

    switch(action.type){
        
        case RECEIVE_USER_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return []
        default:
            return [];
    }
}