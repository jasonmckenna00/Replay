
export const postComment =(comment, videoId) => {
    return $.ajax({
        method: 'post',
        url: `/api/videos/${videoId}/comments`,
        data: {comment}
    })
    
}

export const getComments =(videoId) => {

    return $.ajax({
        method: 'get',
        url: `/api/videos/${videoId}/comments`
    })
    
}

export const deleteComment = (videoId, commentId) => {

    return $.ajax({
        method: 'delete',
        url: `/api/videos/${videoId}/comments/${commentId}`
    })
}

export const patchComment = (comment, videoId) => {
    // 
    return $.ajax({
        method: 'patch',
        url: `/api/videos/${videoId}/comments/${comment.id}`,
        data: {comment}
    })
}