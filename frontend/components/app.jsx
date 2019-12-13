import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter, Route } from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import Splashpage from './splashpage'
import SignupContainer from './session/signup_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util'

const App = () =>(
    <>

        <NavbarContainer />
        <Route exact path="/" component={Splashpage} />
        <AuthRoute path='/signup' component= {SignupContainer} />
        {/* <ProtectedRoute path='/createvideo' component= {SignupContainer} />  */}

    </>
)

export default App