

export const addCommentLike = comment => {
    // debugger
    return $.ajax({
        method: 'post',
        url: `/api/videos/${comment.video_id}/comments/${comment.id}/likes`,
        data: {id: comment.id, liked: true }
    })
}

export const addCommentDisLike = comment => {
    // debugger
    return $.ajax({
        method: 'post',
        url: `/api/videos/${comment.video_id}/comments/${comment.id}/likes`,
        data: {id: comment.id, liked: false }
    })
}

export const addVideoLike = video => {

    return $.ajax({
        method: 'post',
        url: `/api/videos/${video.id}/likes`,
        data: {id: video.id, liked: true}

    })
}


export const addVideoDisLike = video => {

    return $.ajax({
        method: 'post',
        url: `/api/videos/${video.id}/likes`,
        data: {id: video.id, liked: false}

    })
}

export const removeLike = (id, type) => {
    return $.ajax({
        method: 'delete',
        url: `/api/like/removelike`,
        data: {id: id, type: type}
    })
}