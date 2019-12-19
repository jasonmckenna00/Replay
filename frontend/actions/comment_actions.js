import * as CommentUtil from '../util/comment_util'
// postComment
// getComments
// deleteComment
// patchComment
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT'


const receiveComment = (comment) => {

    return{
        type: RECEIVE_COMMENT,
        comment
    }
}

const receiveComments = comments => {

    return{
        type: RECEIVE_COMMENTS,
        comments
    }
}

const removeComment = (commentId) => {

    return{
        type: REMOVE_COMMENT,
        commentId
    }
}

export const fetchComments = (videoId) => dispatch=> {

    return CommentUtil.getComments(videoId).then( (comments) => {
        return dispatch(receiveComments(comments))
    })
}

export const createComment = (comment,videoId) => dispatch => {

    return CommentUtil.postComment(comment, videoId).then( comment => {
        return dispatch(receiveComment(comment))
    })
}

export const updateComment = (comment, videoId) => dispatch =>{

    return CommentUtil.patchComment(comment, videoId).then( comment => {

        return dispatch(receiveComment(comment))
    })
}

export const deleteComment = (videoId, commentId) => dispatch =>{

    return CommentUtil.deleteComment(videoId, commentId).then( () =>{
        
        return dispatch(removeComment(commentId))
    })
}