import {combineReducers} from 'redux';
import userReducer from './users_reducer';
import videosReducer from './videos_reducer';
import commentsReducer from './comments_reducer';

export default combineReducers({
  users: userReducer,
  videos: videosReducer,
  comments: commentsReducer
});