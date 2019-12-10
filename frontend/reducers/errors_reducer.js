import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import userErrorsReducer from './users_error_reducer'

export default combineReducers({
  session: sessionErrorsReducer,
  users: userErrorsReducer
});