import {connect} from 'react-redux';
import Navbar from './navbar';


const msp = (state, ownProps) =>{
    return ( {
    currUser: state.session.currentUser
})}

const mdp = dispatch =>({

})

export default connect(msp,null)(Navbar)