import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter, Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginContainer from './session/login_container'
import VideoIndexContainer from './videos/video_index_container.js';
import NavbarContainer from './navbar/navbar_container';
import VideoCreateFormContainer from './videos/video_create_form_container';

const App = () =>(
    <>
        <NavbarContainer />
        {/* <NavbarContainer />
        <Route exact path="/" component={VideoIndex} />
        <AuthRoute path='/signup' component= {SignupContainer} /> */}
        {/* <ProtectedRoute path='/createvideo' component= {SignupContainer} />  */}

        <Switch>
            <AuthRoute exact path="/login" component={LoginContainer}/>
            <AuthRoute exact path="/signup" component={SignupContainer}/>
            <ProtectedRoute path='/uploadvideo' component={VideoCreateFormContainer} />
            <Route path="/" component={VideoIndexContainer}/>
        </Switch>
       
    </>
)

export default App