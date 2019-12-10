import React from 'react';
import LoginContainer from '../components/session/login_container'
import { withRouter, Route, Link } from 'react-router-dom';
import SignupContainer from '../components/session/signup_container'




const Navbar = () => (
    <div>
    <Link to='/login'> Sign In</Link>
    <Link to='/'>Youtube Logo</Link>
    <Route path='/login' component={LoginContainer}/>
    <Route path='/signup' component={SignupContainer}/>


    </div>
)


export default Navbar