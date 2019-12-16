import {combineReducers} from 'redux';
import loadingReducer from './loading_reducer';
import usersUIReducer from './users_ui_reducer';


export default combineReducers({
    loading: loadingReducer,
    user: usersUIReducer
})