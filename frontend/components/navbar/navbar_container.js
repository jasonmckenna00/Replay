import {connect} from 'react-redux';
import Navbar from './navbar';
import {logout} from '../../actions/session_actions'
import {closeSideBar, openSideBar} from '../../actions/ui_actions';
import {searchVideos} from '../../actions/video_actions'

const msp = (state, ownProps) =>{

    return ( {
    currUser: state.session.currentUser,
    isOpen: state.ui.sidebar.isOpen
})}

const mdp = dispatch =>({
    logout: () => dispatch(logout()),
    closeSideBar: () => dispatch(closeSideBar()),
    openSideBar: () => dispatch(openSideBar()),
    searchVideos: (searchInfo) => dispatch(searchVideos(searchInfo))

})

export default connect(msp,mdp)(Navbar)