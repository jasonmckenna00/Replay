import * as VideoUtil from '../util/video_util'
// {getVideos,
//     postVideo,
//     updateVideo,
//     getVideoById
// } 

export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS'
export const REMOVE_VIDEO = 'REMOVE_VIDEO';
export const UPDATE_VIDEO = 'UPDATE_VIDEO'

const receiveVideo = (video) => ({
    type: RECEIVE_VIDEO,
    video
})

const receiveVideos = (videos) => ({
    type: RECEIVE_VIDEOS,
    videos
})

const receiveVideoErrors = (errors) => ({
    type: RECEIVE_VIDEO_ERRORS,
    errors
})

const removeVideo = (videoId) => ({
    type: REMOVE_VIDEO,
    videoId
})




export const fetchVideos = () => dispatch => (
    VideoUtil.getVideos().then( () => dispatch(receiveVideos(videos)))
)

export const fetchVideo = (videoId) => dispatch => (
    VideoUtil.getVideoById(videoId).then( (video) => dispatch(receiveVideo(video)))
)

export const updateVideo = (video) => dispatch => (
    VideoUtil.getVideoById(video.id).then( (updatedVideo) => dispatch(receiveVideo(updatedVideo)), err => dispatch(receiveVideoErrors(err.responseJSON)))
)

export const createVideo = (video) => dispatch => (
    VideoUtil.postVideo(video).then( (createdVideo) => dispatch(receiveVideo(createdVideo)), err => dispatch(receiveVideoErrors(err.responseJSON)))
)

export const deleteVideo = (videoId) => dispatch => (
    VideoUtil.deleteVideo.then( () => dispatch(removeVideo(videoId)))
)