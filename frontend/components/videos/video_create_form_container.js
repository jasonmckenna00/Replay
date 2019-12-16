import {connect} from 'react-redux'
import VideoCreateForm from './video_create_form';
import {createVideo} from '../../actions/video_actions'
import {clearVideoErrors} from '../../actions/video_actions'
import { clearErrors } from '../../actions/session_actions'
const msp = state => {
    return {
        errors: state.errors.videos
    }
}

const mdp = dispatch => {
    return {
        createVideo: video => dispatch(createVideo(video)),
        clearVideoErrors: () => dispatch(clearVideoErrors()),
        clearErrors: () => dispatch(clearErrors())
    }
}


export default connect(msp,mdp)(VideoCreateForm)