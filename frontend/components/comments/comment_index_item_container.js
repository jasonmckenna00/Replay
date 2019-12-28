import {connect} from 'react-redux'
import addCommentLike from '../../util/like_util'

const msp = state => ({
    // commentAuthor: state.entitites.users[]
}) 

const mdp = dispatch =>({
    updateComment: (comment, videoId) => dispatch(updateComment(comment,videoId)),
    deleteComment: (videoId, commentId) => dispatch(deleteComment(videoId, commentId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    addCommentLike: (comment) => dispatch(addCommentLike(comment))

})

export default CommentIndexItemContainer