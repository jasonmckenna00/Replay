import {connect} from 'react-redux'
import {updateComment, deleteComment} from '../../actions/comment_actions'
import {addCommentLike, addCommentDisLike, removeCommentLike} from '../../actions/like_actions'
import CommentIndexItem from './comment_Index_Item'


const msp = (state) => {
    return({
    currentUser: state.session.currentUser,
    })   
}


const mdp = dispatch => {
    // debugger
    return {
        updateComment: (comment, videoId) => dispatch(updateComment(comment,videoId)),
        deleteComment: (videoId, commentId) => dispatch(deleteComment(videoId, commentId)),
        addCommentLike: (comment) => dispatch(addCommentLike(comment)),
        addCommentDisLike: (comment) => dispatch(addCommentDisLike(comment)),
        removeCommentLike: commentId => dispatch(removeCommentLike(commentId))
    }
}

export default connect(msp, mdp)(CommentIndexItem)