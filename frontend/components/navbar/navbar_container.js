import {connect} from 'react-redux';
import Navbar from './navbar';
import {logout} from '../../actions/session_actions'


const msp = (state, ownProps) =>{
    // debugger
    return ( {
    currUser: state.session.currentUser
})}

const mdp = dispatch =>({
    logout: () => dispatch(logout())
})

export default connect(msp,mdp)(Navbar)