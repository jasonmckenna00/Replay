import {connect} from 'react-redux'
import UserShow from './user_show'
import * as VidActions from '../../actions/video_actions'

// videos.forEach( video => {
            // if (video.user_id === user.id) {
                // if (!userVideos.length){
                    // fetchVideo(video.id).then( video => firstVideo = video);
// 
                // }
                // userVideos.push(video)
            // }
        // })

const msp = (state, ownProps) => {
    let videos = Object.values(state.entities.videos);
    let user = state.entities.users[ownProps.match.params.userId];

    let userVideos = [];
    let firstVideoId = 0;
    if (videos.length && user){
        videos.forEach( video => {
                if (video.user_id === user.id) {
                    if (!userVideos.length){
                        firstVideoId = video.id;
    
                    }
                    userVideos.push(video)
                }
            })
    }

    const firstVid = firstVideoId ? state.entities.videos[firstVideoId] : null;

    return {
        videos,
        user,
        userVideos,
        firstVideoId,
        firstVid,
        users: state.entities.users,
    }
}

const mdp = dispatch => ({
    fetchAllVideos: () => dispatch(VidActions.fetchAllVideos()),
    fetchVideo: (videoId) => dispatch(VidActions.fetchVideo(videoId)),

})

const UserShowContainer = connect(msp,mdp)(UserShow);
export default UserShowContainer;

