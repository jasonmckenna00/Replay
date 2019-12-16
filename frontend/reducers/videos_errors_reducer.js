import {RECEIVE_VIDEO_ERRORS} from '../actions/video_actions';

export default (state = [], action) => {
    // debugger
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_VIDEO_ERRORS:
            return action.errors
        // case CLEAR_ERRORS:
        //     return [];
        default: 
            return state;
    }
}