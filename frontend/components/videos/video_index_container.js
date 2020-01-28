import { connect } from 'react-redux'
import VideoIndex from './video_index'
import * as VidActions from '../../actions/video_actions'
import * as UserActions from '../../actions/user_actions'
const msp = state => {
    // 
    const searchVids = Object.values(state.ui.searchVids)
    return({
    videos: Object.values(state.entities.videos),
    users: state.entities.users,
    loading: state.ui.loading,
    searchVids,
    searched: searchVids.length? true: false
    
})}

const mdp = dispatch => ({
    fetchAllVideos: () => dispatch(VidActions.fetchAllVideos()),
    fetchVideo: (videoId) => dispatch(VidActions.fetchVideo(videoId)),
    fetchUser: (userId) => dispatch(UserActions.fetchUser(userId)),
    fetchAllUsers: () => dispatch(UserActions.fetchAllUsers())
})

export default connect(msp,mdp)(VideoIndex)