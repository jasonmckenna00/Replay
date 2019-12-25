import {connect} from 'react-redux'

const msp = state => ({
    // commentAuthor: state.entitites.users[]
}) 

const mdp = dispatch =>({
    updateComment: (comment, videoId) => dispatch(updateComment(comment,videoId)),
    deleteComment: (videoId, commentId) => dispatch(deleteComment(videoId, commentId)),
    fetchUser: (userId) => dispatch(fetchUser(userId)),

})

export default CommentIndexItemContainer