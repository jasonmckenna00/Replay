import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter, Route } from 'react-router-dom';
import Navbar from './navbar/navbar';
import Splashpage from './splashpage'
import LoginContainer from '../components/session/login_container'

const App = () =>(
    <>

        <Navbar />
        <Route exact path="/" component={Splashpage} />
        

    </>
)

export default App