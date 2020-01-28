import {connect} from 'react-redux'
import Sidebar from './side_bar'

const msp = state =>{
    // 
    return {
        isOpen: state.ui.sidebar.isOpen

    }
}

const mdp = dispatch => ({

})

export default connect(msp,null)(Sidebar)