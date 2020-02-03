import {RECEIVE_VIDEO_ERRORS, CLEAR_VIDEO_ERRORS} from '../actions/video_actions';
import { CLEAR_ERRORS } from '../actions/session_actions';

export default (state = [], action) => {
    // debugger
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_VIDEO_ERRORS:
// debugger
            return action.errors
        case CLEAR_ERRORS:
            return [];
        case CLEAR_VIDEO_ERRORS:
            return [];
        default: 
            return [];
    }
}