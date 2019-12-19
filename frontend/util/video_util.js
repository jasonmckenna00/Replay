
export const getVideo = (videoId) => (
    $.ajax({
        method: 'get',
        url: `/api/videos/${videoId}`
    })
)

// export const fetchVideosByUser = (userId) => (
//     $.ajax({
//         method: 'get',
//         url: ``
//     })
// )   may not need because user has videos association and can get by the video id

export const getVideos = () => (
    $.ajax({
        method: 'get',
        url: `/api/videos/`
    })
)

export const postVideo = (video) => {
    // debugger
    return( $.ajax({
        method: 'post',
        url: `/api/videos/`,
        data: video,
        contentType: false,
        processData: false
    })
)}

export const updateVideo = (video,videoId) => {
    return $.ajax({
        method: `patch`,
        url: `/api/videos/${videoId}`,
        data: video,
        contentType: false,
        processData: false
    })
}


export const deleteVideo = (videoId) => {
    return  $.ajax({
        method: `delete`,
        url: `/api/videos/${videoId}`
    })
}
   

