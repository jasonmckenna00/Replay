import {RECEIVE_VIDEO_ERRORS} from '../actions/video_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type){
        case RECEIVE_VIDEO_ERRORS:
            return action.errors
        // case CLEAR_ERRORS:
        //     return [];
        default: 
            return [];
    }
}