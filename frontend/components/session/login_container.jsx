import {connect} from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';
import { fetchUserByEmail, resetUserUIState, clearErrors} from '../../actions/session_actions';




const msp = state =>({
    passwordErrors: Object.values(state.errors.session),
    emailErrors: Object.values(state.errors.users),
    currUser: Object.values(state.ui.user)
})

const mdp = dispatch =>({
    login: (user) => dispatch(login(user)),
    fetchUserByEmail: (email) => dispatch(fetchUserByEmail(email)),
    resetUserUIState: () => dispatch(resetUserUIState()),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(msp,mdp)(LoginForm)