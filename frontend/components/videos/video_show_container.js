import {connect} from 'react-redux'
import VideoShow from './video_show'
import {fetchAllVideos, fetchVideo} from '../../actions/video_actions'
import {fetchAllUsers, fetchUser} from '../../actions/user_actions';
import {addVideoLike, addVideoDisLike, removeVideoLike} from '../../actions/like_actions'



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
    videos: Object.values(state.entities.videos),
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
        fetchUser: (userId) => dispatch(fetchUser(userId)),
        addVideoLike: (Video) => dispatch(addVideoLike(Video)),
        addVideoDisLike: (Video) => dispatch(addVideoDisLike(Video)),
        removeVideoLike: VideoId => dispatch(removeVideoLike(VideoId))
        


    }
}

const VideoShowContainer = connect(msp,mdp)(VideoShow)

export default VideoShowContainer