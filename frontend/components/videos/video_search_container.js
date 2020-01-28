import { connect } from 'react-redux'
import * as VidActions from '../../actions/video_actions'
import VideoSearch from './video_search';
import {searchVideos} from '../../actions/video_actions'




const msp = (state, ownProps) => {
    const searchVids = Object.values(state.ui.searchVids)
    return{
        videos: Object.values(state.entities.videos),
        // searchInfo: this.state.
        searchVids,
        searched: searchVids.length? true: false
    }
}

const mdp = dispatch => {

    return{
        fetchAllVideos: () => dispatch(VidActions.fetchAllVideos()),
        searchVideos: (searchInfo) => dispatch(searchVideos(searchInfo))

    }
}

export default connect(msp,mdp)(VideoSearch)