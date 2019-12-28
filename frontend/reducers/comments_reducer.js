
import {RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT} from '../actions/comment_actions'
import { RECEIVE_VIDEO } from '../actions/video_actions';
import { RECEIVE_COMMENT_LIKE } from '../actions/like_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_COMMENTS:
            return action.comments
        case RECEIVE_COMMENT:
            return Object.assign({}, state, action.comment)
        case REMOVE_COMMENT:
            let newState = Object.assign({}, state);
            delete newState[action.commentId]
            return newState;
        case RECEIVE_VIDEO: 
            if (!action.payload.comments) return []
            return action.payload.comments;
        case RECEIVE_COMMENT_LIKE:
            if (!action.payload.comment) return []
            return Object.assign({}, state, action.payload.comment)
        default: return state
    }   
}