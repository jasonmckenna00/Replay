// import {addCommentLike, addVideoLike, removeLike} from '../util/like_util'
import * as LikeUtil from '../util/like_util'
import { RECEIVE_VIDEO } from './video_actions';

export const RECEIVE_COMMENT_LIKE = 'RECEIVE_COMMENT_LIKE';
export const REMOVE_COMMENT_LIKE = 'REMOVE_COMMENT_LIKE';
export const RECEIVE_VIDEO_LIKE = 'RECEIVE_VIDEO_LIKE';
export const REMOVE_VIDEO_LIKE = 'REMOVE_VIDEO_LIKE';

const receiveCommentLike = payload =>{
    debugger
    return {
        type: RECEIVE_COMMENT_LIKE,
        payload
    }
}


export const addCommentLike = (comment) => dispatch =>{

    return LikeUtil.addCommentLike(comment)
        .then( payload => {
            return dispatch(receiveCommentLike(payload))
        })
}

export const addCommentDisLike = (comment) => dispatch =>{

    return LikeUtil.addCommentDisLike(comment)
        .then( payload => {
            return dispatch(receiveCommentLike(payload))
        })
}