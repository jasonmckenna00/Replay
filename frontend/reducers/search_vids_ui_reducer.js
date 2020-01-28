import { SEARCH_VIDEO_CONTENT, RECEIVE_VIDEOS } from "../actions/video_actions";

export default (state = [], action) => {
    switch(action.type){
        case SEARCH_VIDEO_CONTENT:
            return action.searchVids;
        case RECEIVE_VIDEOS:
            return state
        default: 
            return [];
    }
}



