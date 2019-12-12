import {connect} from 'react-redux';
import SignupForm from './signup_form';
import { createNewUser, clearErrors } from '../../actions/session_actions'
 
const msp = state => ({
    errors: state.errors.users
})

const mdp = dispatch => ({
    createNewUser: formUser => dispatch(createNewUser(formUser)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(msp,mdp)(SignupForm)