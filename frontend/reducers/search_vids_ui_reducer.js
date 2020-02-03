import { SEARCH_VIDEO_CONTENT, CLEAR_SEARCH_CONTENT } from "../actions/video_actions";

export default (state = [], action) => {
    switch(action.type){
        case SEARCH_VIDEO_CONTENT:
            return action.searchVids;
        case CLEAR_SEARCH_CONTENT:
            return []
        default: 
            return state;
    }
}



