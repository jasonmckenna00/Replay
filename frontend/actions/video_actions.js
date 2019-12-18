import * as VideoUtil from '../util/video_util'
import { startLoadingAllVideos, startLoadingSingleVideo } from './loading_action';
// {getVideos,
//     postVideo,
//     updateVideo,
//     getVideoById
// } 

export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS'
export const REMOVE_VIDEO = 'REMOVE_VIDEO';
export const UPDATE_VIDEO = 'UPDATE_VIDEO';
export const CLEAR_VIDEO_ERRORS = 'CLEAR_VIDEO_ERRORS'

const receiveVideo = (payload) => {
    debugger
    return {
    type: RECEIVE_VIDEO,
    payload
    }
}

const receiveVideos = (videos) => ({
    type: RECEIVE_VIDEOS,
    videos
})

const receiveVideoErrors = (errors) => {
    
    return {
    type: RECEIVE_VIDEO_ERRORS,
    errors
    }
}

export const clearVideoErrors = () => {
    // debugger
    return {
        type: CLEAR_VIDEO_ERRORS
    }
}

const removeVideo = (videoId) => ({
    type: REMOVE_VIDEO,
    videoId
})




export const fetchAllVideos = () => dispatch => {
    dispatch(startLoadingAllVideos())
    return VideoUtil.getVideos()
        .then( (videos) => dispatch(receiveVideos(videos)))
}


export const fetchVideo = (videoId) => dispatch => {
    dispatch(startLoadingSingleVideo())
    // debugger
    return VideoUtil.getVideo(videoId).then( (video) => { 
            // debugger
            return dispatch(receiveVideo(video))
        })
}

export const updateVideo = (video,videoId) => dispatch => {
    // dispatch(startLoadingSingleVideo())
    return VideoUtil.updateVideo(video, videoId)
        .then( (updatedVideo) => {
            return dispatch(receiveVideo(updatedVideo)), err => {
                 return console.log(err) // err => dispatch(receiveVideoErrors(err.responseJSON)))
            }
        })
        
        
        
}

export const createVideo = (video) => dispatch => {
    // debugger
    // dispatch(startLoadingSingleVideo())
    return VideoUtil.postVideo(video)
        .then( (createdVideo) => dispatch(receiveVideo(createdVideo)), 
            err => dispatch(receiveVideoErrors(err.responseJSON)))
}

export const deleteVideo = (videoId) => dispatch => (
    VideoUtil.deleteVideo().then( () => dispatch(removeVideo(videoId)))
)