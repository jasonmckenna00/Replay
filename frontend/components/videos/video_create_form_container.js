import {connect} from 'react-redux'
import VideoForm from './video_form';
import {createVideo} from '../../actions/video_actions'
import {clearVideoErrors} from '../../actions/video_actions'
import { clearErrors } from '../../actions/session_actions'
const msp = state => {
    return {
        errors: state.errors.videos,
        formType: 'Upload Video',
        video:  {videoUrl: null, 
                thumbnailUrl: null, 
                title: '', 
                description: '', 
                thumbnailPreview: null,
                videoPreview: null}
    }
}

const mdp = dispatch => {
    return {
        submitVideo: video => dispatch(createVideo(video)),
        clearVideoErrors: () => dispatch(clearVideoErrors()),
        clearErrors: () => dispatch(clearErrors())
    }
}


export default connect(msp,mdp)(VideoForm)