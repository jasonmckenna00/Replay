
import {START_LOADING_ALL_VIDEOS, 
        START_LOADING_SINGLE_VIDEO,
        START_LOADING_ALL_USERS,
        START_LOADING_USER} from '../actions/loading_action'
import { RECEIVE_VIDEO, RECEIVE_VIDEOS } from '../actions/video_actions'
import { RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/user_actions';


const loadingStatus = { videoLoading: false, userLoading: false}

export default (state = loadingStatus, action) => {
    switch(action.type){
        case START_LOADING_ALL_VIDEOS:
            return Object.assign({},state, {videoLoading: true})
        case START_LOADING_SINGLE_VIDEO:
            return Object.assign({},state, {videoLoading: true})
        case START_LOADING_ALL_USERS:
            return Object.assign({},state, {userLoading: true})
        case START_LOADING_USER:
            return Object.assign({},state, {userLoading: true})
        case RECEIVE_USER:
            return Object.assign({},state, {userLoading: false})
        case RECEIVE_VIDEOS:
            return Object.assign({},state, {videoLoading: false})
        case RECEIVE_VIDEO:
            return Object.assign({},state, {videoLoading: false})
        case RECEIVE_ALL_USERS:
            return Object.assign({},state, {userLoading: false})
        default: return state


    }
}