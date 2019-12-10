import {postUser, postSession, deleteSession} from '../util/session'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";


const receiveCurrentUser = (user) => {
    // debugger
    return ({
    type: RECEIVE_CURRENT_USER,
    user
})}

const logoutCurrentUser = () =>{
    // debugger
    return({
    type: LOGOUT_CURRENT_USER
})}

export const receiveSessionErrors = errors => {
    // debugger 
    return ({
    type: RECEIVE_SESSION_ERRORS,
    errors
  });
  
}
export const receiveUserErrors = errors => {
    debugger 
    return ({
    type: RECEIVE_USER_ERRORS,
    errors
  });
  
}




export const createNewUser = formUser => dispatch =>{
    
    return(
    postUser(formUser).then( (user) => dispatch(receiveCurrentUser(user)), err => dispatch(receiveUserErrors(err.responseJSON)))
)}

 
export const login = formUser => dispatch => {
    
    return(
    postSession(formUser).then( (user) => dispatch(receiveCurrentUser(user)), err => dispatch(receiveSessionErrors(err.responseJSON)))
)}

export const logout = () => dispatch => (
    deleteSession().then( () => dispatch(logoutCurrentUser()))
)