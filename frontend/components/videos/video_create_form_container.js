import {connect} from 'react-redux'
import VideoCreateForm from './video_create_form';
import {createVideo} from '../../actions/video_actions'

const msp = state => {
    return {

    }
}

const mdp = dispatch => {
    return {
        createVideo: video => dispatch(createVideo(video))
    }
}


export default connect(null,mdp)(VideoCreateForm)