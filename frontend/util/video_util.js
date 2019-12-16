
export const getVideoById = (videoId) => (
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

export const postVideo = (video) => (
    $.ajax({
        method: 'post',
        url: `/api/videos/`,
        data: {video}
    })
)

export const updateVideo = (video) => (
    $.ajax({
        method: `patch`,
        url: `/api/videos/${video.id}`
    })
)

export const deleteVideo = (videoId) => (
    $.ajax({
        method: `delete`,
        url: `/api/videos/${videoId}`
    })
)
