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
export const CLEAR_VIDEO_ERRORS = 'CLEAR_VIDEO_ERRORS';
export const SEARCH_VIDEO_CONTENT = 'SEARCH_VIDEO_CONTENT';
export const CLEAR_SEARCH_CONTENT = 'CLEAR_SEARCH_CONTENT'

const receiveVideo = (payload) => {
    return {
    type: RECEIVE_VIDEO,
    payload
    }
}

const receiveVideos = (payload) => ({
    type: RECEIVE_VIDEOS,
    payload
})

const receiveVideoErrors = (errors) => {
    return {
    type: RECEIVE_VIDEO_ERRORS,
    errors
    }
}

export const clearVideoErrors = () => {

    return {
        type: CLEAR_VIDEO_ERRORS
    }
}

const searchVideoContent = (searchVids) => {
    return {
        type: SEARCH_VIDEO_CONTENT,
        searchVids
    }
}

export const clearSearchContent = () => {
    return{
        type: CLEAR_SEARCH_CONTENT
    }
}


const removeVideo = (videoId) => ({
    type: REMOVE_VIDEO,
    videoId
})




export const fetchAllVideos = () => dispatch => {
    // dispatch(startLoadingAllVideos())
    return VideoUtil.getVideos()
        .then( (videos) => dispatch(receiveVideos(videos)))
}


export const fetchVideo = (videoId) => dispatch => {
    // dispatch(startLoadingSingleVideo())
    return VideoUtil.getVideo(videoId).then( (video) => { 
            return dispatch(receiveVideo(video))
        })
}

export const updateVideo = (video,videoId) => dispatch => {
    return VideoUtil.updateVideo(video, videoId)
        .then( (updatedVideo) => {
            return dispatch(receiveVideo(updatedVideo)),
                 err => dispatch(receiveVideoErrors(err.responseJSON))
            }
        )
        
        
        
}

export const createVideo = (video) => dispatch => {
    return VideoUtil.postVideo(video)
        .then(
            (createdVideo) => {
                
                return dispatch(receiveVideo(createdVideo))
            }, 
            err => dispatch(receiveVideoErrors(err.responseJSON)))
            
}

export const deleteVideo = (videoId) => dispatch => {
    return VideoUtil.deleteVideo(videoId)
        .then( () => dispatch(removeVideo(videoId)), err => dispatch(receiveVideoErrors(err.responseJSON)))
}

export const searchVideos = (searchInfo) => dispatch => {
    return VideoUtil.searchVideos(searchInfo)
        .then( searchVids => dispatch(searchVideoContent(searchVids)))
}
