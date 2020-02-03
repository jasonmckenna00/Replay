import React from 'react';
import {Link} from 'react-router-dom';
import { withRouter, Route, Switch } from 'react-router-dom';
import SignupContainer from './session/signup_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginContainer from './session/login_container'
import VideoIndexContainer from './videos/video_index_container.js';
import NavbarContainer from './navbar/navbar_container';
import VideoCreateFormContainer from './videos/video_create_form_container';
import VideoShowContainer from './videos/video_show_container';
import SideBarContainer from './sidebar/side_bar_container';
import VideoEditFormContainer from './videos/video_edit_form_container';
import UserShowContainer from './users/user_show_container';
import VideoSearchContainer from './videos/video_search_container';

const App = () => <>
        <NavbarContainer />
        <div className='dom-body'>
            <SideBarContainer />

        <Switch>
            <AuthRoute exact path="/login" component={LoginContainer}/>
            <AuthRoute exact path="/signup" component={SignupContainer}/>
            <ProtectedRoute path='/uploadvideo' component={VideoCreateFormContainer} />
            <Route exact path='/videos/:videoId' component={VideoShowContainer} />
            <Route exact path='/videos/:videoId/edit' component={VideoEditFormContainer} />
            <Route exact path='/users/:userId' component={UserShowContainer} />
            <Route path='/videos/search/:searchInfo' component={VideoSearchContainer} />
            <Route exact path="/" component={VideoIndexContainer}/>
        </Switch>
       </div>
    </>

export default App