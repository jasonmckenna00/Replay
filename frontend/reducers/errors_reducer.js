import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import userErrorsReducer from './users_error_reducer';
import videoErrorsReducer from './videos_errors_reducer'

export default combineReducers({
  session: sessionErrorsReducer,
  users: userErrorsReducer,
  videos: videoErrorsReducer
});