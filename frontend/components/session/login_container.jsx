import {connect} from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../actions/session_actions';
import { fetchUserByEmail} from '../../actions/session_actions';




const msp = state =>({
    passwordErrors: Object.values(state.errors.session),
    emailErrors: Object.values(state.errors.users),
    currUser: Object.values(state.entities.users)
})

const mdp = dispatch =>({
    login: (user) => dispatch(login(user)),
    fetchUserByEmail: (email) => dispatch(fetchUserByEmail(email))
})

export default connect(msp,mdp)(LoginForm)