import {connect} from 'react-redux';
import Navbar from './navbar';
import {logout} from '../../actions/session_actions'


const msp = (state, ownProps) =>{
    // debugger
    return ( {
    currUser: Object.values(state.session.currentUser)[0]
})}

const mdp = dispatch =>({
    logout: () => dispatch(logout())
})

export default connect(msp,mdp)(Navbar)