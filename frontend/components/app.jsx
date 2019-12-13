import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter, Route } from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import Splashpage from './splashpage'
import LoginContainer from '../components/session/login_container'

const App = () =>(
    <>

        <NavbarContainer />
        <Route exact path="/" component={Splashpage} />
        

    </>
)

export default App