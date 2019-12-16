
export const START_LOADING_ALL_VIDEOS = 'START_LOADING_ALL_VIDEOS';
export const START_LOADING_SINGLE_VIDEO = 'START_LOADING_SINGLE_VIDEO';
export const START_LOADING_ALL_USERS = 'START_LOADING_ALL_USERS';
export const START_LOADING_USER = 'START_LOADING_USER'

export const startLoadingSingleVideo = () => ({
    type: START_LOADING_SINGLE_VIDEO
})

export const startLoadingAllVideos = () => ({
    type: START_LOADING_ALL_VIDEOS
})

export const startLoadingAllUsers = () => ({
    type: START_LOADING_ALL_USERS
})

export const startLoadingUser = () => ({
    type: START_LOADING_USER
})