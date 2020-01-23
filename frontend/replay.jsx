import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {getVideos, postVideo, getVideo} from './util/video_util'
import {fetchAllUsers} from './actions/user_actions'
import {fetchUserById} from './util/user_util'


document.addEventListener('DOMContentLoaded', () =>{
    let store;
    if (window.currentUser) {
        const preloadedState = {
          session: {
            // currentUser: { [window.currentUser.id]: window.currentUser }
            currentUser:  window.currentUser 
          }
        }
        store = configureStore(preloadedState)
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    




    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} className='root'/>, root)

})