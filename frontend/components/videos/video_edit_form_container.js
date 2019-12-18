import {connect} from 'react-redux'
import {fetchVideo, updateVideo,deleteVideo} from '../../actions/video_actions'
import {clearVideoErrors} from '../../actions/video_actions'
import { clearErrors } from '../../actions/session_actions'
import VideoForm from './video_form'
import React from 'react'
import { withRouter } from 'react-router-dom'


class EditVideoForm extends React.Component{

    componentDidMount(){
        this.props.fetchVideo(this.props.match.params.videoId)
    }


    render(){
        // debugger
        const {video, formType, submitVideo, deleteVideo, clearVideoErrors, clearErrors, errors} = this.props
        if (!video) return null
        return (
            <VideoForm video={video} 
            formType={formType} 
            submitVideo={submitVideo} 
            deleteVideo={deleteVideo}
            clearVideoErrors= {clearVideoErrors}
            clearErrors= {clearErrors}
            errors={errors}/>
        )
    }
}


const msp = (state, ownProps) => {

    let video = state.entities.videos[ownProps.match.params.videoId];
    if (video) (delete video.thumbnailUrl)
    return {
        video,
        formType: 'Edit Video',
        errors: state.errors.videos
    }
}

const mdp = dispatch => ({
    
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
    submitVideo: (video, videoId) => dispatch(updateVideo(video, videoId)),
    clearVideoErrors: () => dispatch(clearVideoErrors()),
    clearErrors: () => dispatch(clearErrors()),
    deleteVideo: videoId => dispatch(deleteVideo(videoId))
})

const editVideoContainer = connect(msp,mdp)(EditVideoForm)
export default withRouter(editVideoContainer)