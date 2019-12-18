import {connect} from 'react-redux'
import VideoShow from './video_show'
import {fetchVideo} from '../../actions/video_actions'
import {fetchUser} from '../../actions/user_actions'


const msp = (state, ownProps) => {
    // debugger
    return({
    video: state.entities.videos[ownProps.match.params.videoId],
    loading: state.ui.loading
    })   
}


const mdp = dispatch => {
    // debugger
    return {
        fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
    }
}

const VideoShowContainer = connect(msp,mdp)(VideoShow)

export default VideoShowContainer