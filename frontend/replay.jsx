import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {logout} from './actions/session_actions'
import {fetchUserByEmail} from './actions/session_actions'



document.addEventListener('DOMContentLoaded', () =>{
    let store;
    if (window.currentUser) {
        const preloadedState = {
          session: {
            currentUser: { [window.currentUser.id]: window.currentUser }
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
    window.logout = logout;

    //
    window.fetchEmail = fetchUserByEmail

})