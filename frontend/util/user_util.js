


export const fetchUserByEmail = (email) => {
return(
    $.ajax({
        method: 'get',
        url: '/api/session/email',
        data: {email}
    })
)}

export const fetchUserById = (userId) => {
    // debugger
    return(
        $.ajax({
            method: 'get',
            url: `/api/users/${userId}`
        })
    )
}

export const fetchAllUsers = () => {
    return(
        $.ajax({
            method: 'get',
            url: `/api/users/`
        })
    )
}
