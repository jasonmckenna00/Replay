import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {getVideoById, getVideos} from './util/video_util'
import {fetchAllUsers} from './actions/user_actions'


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
    ReactDOM.render(<Root store={store}/>, root)
    window.getState = store.getState
    window.dispatch = store.dispatch

    window.getVideoById = getVideoById
    window.getVideos = getVideos
    window.fetchAllUsers = fetchAllUsers

})