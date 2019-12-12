


export const fetchUserByEmail = (email) => {
return(
    $.ajax({
        method: 'get',
        url: '/api/session/email',
        data: {email}
    })
)}