//post user
//postsession
//deletesession

export const postUser = (user) => {
    // 
    return(
    $.ajax({
        method: 'post',
        url: '/api/users/',
        data: {user}
    })
)}

export const postSession = user => {
    // 
    return(
    $.ajax({
        method: 'post',
        url: '/api/session/',
        data: {user}
    })
)}

export const deleteSession = () => {
    // 
    return(
    $.ajax({
        method: 'delete',
        url: `/api/session/`
    })
)}