import {connect} from 'react-redux'
import VideoShow from './video_show'
import {fetchAllVideos, fetchVideo} from '../../actions/video_actions'
import {fetchUser, fetchAllUsers} from '../../actions/user_actions'
import {fetchComments, createComment, updateComment, deleteComment} from '../../actions/comment_actions'

const msp = (state, ownProps) => {
    // debugger
    let video = state.entities.videos[ownProps.match.params.videoId]
    let user =  video ? state.entities.users[video.user_id] : {}
    video = video ? video : {}
    user = user ? user : {}

    return({
    video, 
    user,
    users: state.entities.users,
    loading: state.ui.loading,
    currentUser: state.session.currentUser,
    comments: Object.values(state.entities.comments)
    })   
}


const mdp = dispatch => {
    // debugger
    return {
        fetchAllVideos: () => dispatch(fetchAllVideos()),
        fetchAllUsers: () => dispatch(fetchAllUsers()),
        fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
        fetchComments: (videoId) => dispatch(fetchComments(videoId)),
        updateComment: (comment, videoId) => dispatch(updateComment(comment,videoId)),
        deleteComment: (videoId, commentId) => dispatch(deleteComment(videoId, commentId))
    }
}

const VideoShowContainer = connect(msp,mdp)(VideoShow)

export default VideoShowContainer