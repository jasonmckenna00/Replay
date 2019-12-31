import {connect} from 'react-redux'
import VideoShow from './video_show'
import {fetchAllVideos, fetchVideo} from '../../actions/video_actions'
import {fetchAllUsers} from '../../actions/user_actions'


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
        fetchVideo: (videoId) => dispatch(fetchVideo(videoId))
        


    }
}

const VideoShowContainer = connect(msp,mdp)(VideoShow)

export default VideoShowContainer