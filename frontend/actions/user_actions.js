import * as UsersUtil from '../util/user_util';
export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
import { startLoadingAllUsers, startLoadingUser } from './loading_action';


const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

const receiveAllUsers = (users) => {
    return({
    type: RECEIVE_ALL_USERS,
    users
})}

export const fetchUser = (userId) => dispatch =>{
    dispatch(startLoadingUser())
    // debugger
    return UsersUtil.fetchUserById(userId).then( user => dispatch(receiveUser(user)))
}

export const fetchAllUsers = () => dispatch => {
    dispatch(startLoadingAllUsers())
    return(
    UsersUtil.fetchAllUsers().then( users => dispatch(receiveAllUsers(users)))
)}



