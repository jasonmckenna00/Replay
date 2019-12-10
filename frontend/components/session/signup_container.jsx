import {connect} from 'react-redux';
import SignupForm from './signup_form';
import { createNewUser } from '../../actions/session_actions'
 
const msp = state => ({
    errors: state.errors.users,
})

const mdp = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser))
})

export default connect(msp,mdp)(SignupForm)