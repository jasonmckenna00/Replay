import {combineReducers} from 'redux';
import userReducer from './users_reducer';
import videosReducer from './videos_reducer';

export default combineReducers({
  users: userReducer,
  videos: videosReducer
});