import {connect} from 'react-redux'
import VideoForm from './video_form';
import {createVideo} from '../../actions/video_actions'
import {clearVideoErrors} from '../../actions/video_actions'
import { clearErrors } from '../../actions/session_actions'
import {startLoadingSingleVideo} from '../../actions/loading_action'
const msp = state => {
    
    return {
        errors: state.errors.videos,
        formType: 'Upload Video',
        video:  {videoUrl: '', 
                thumbnailUrl: '', 
                title: '', 
                description: '', 
                thumbnailPreview: null,
                videoPreview: null},
        videoLoading: state.ui.loading.videoLoading
    }
}

const mdp = dispatch => {
    return {
        submitVideo: video => dispatch(createVideo(video)),
        clearVideoErrors: () => dispatch(clearVideoErrors()),
        clearErrors: () => dispatch(clearErrors()),
        startLoadingSingleVideo: () => dispatch(startLoadingSingleVideo())
    }
}


export default connect(msp,mdp)(VideoForm)