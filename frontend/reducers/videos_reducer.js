import { RECEIVE_VIDEO,
    RECEIVE_VIDEOS,
    RECEIVE_VIDEO_ERRORS,
    REMOVE_VIDEO
} from '../actions/video_actions'

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_VIDEOS:
            return Object.assign({}, state, action.videos);
        case RECEIVE_VIDEO:
            // debugger
            if (!action.payload.video) return state
            return Object.assign({},state, {[action.payload.video.id]: action.payload.video});
        case REMOVE_VIDEO:
            let newState = Object.assign({},state);
            delete newState[action.videoId];
            return newState;
        case RECEIVE_VIDEO_LIKE:
            if (!action.payload.video) return state
            return Object.assign({}, state, {[action.payload.video.id]: action.payload.video})
        case REMOVE_VIDEO_LIKE:
            if (!action.payload.video) return state
            return Object.assign({}, state, {[action.payload.video.id]: action.payload.video})
            
        default: return state;
    }
}
