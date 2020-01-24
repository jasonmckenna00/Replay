import { SEARCH_VIDEO_CONTENT } from "../actions/video_actions";

export default (state = [], action) => {
    switch(action.type){
        case SEARCH_VIDEO_CONTENT:
            return action.searchVids
        default: 
            return [];
    }
}



