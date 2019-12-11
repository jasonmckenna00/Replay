import {connect} from 'react-redux';
import Navbar from './navbar';


const msp = (state, ownProps) => {
    currPath: ownProps.history.location.pathname
}

const mdp = dispatch =>({

})

export default connect(msp,null)(Navbar)