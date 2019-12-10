import SessionsReducer from '../reducers/session_reducer';
import { combineReducers } from 'redux'

const RootReducer = combineReducers({
    sessionsReducer: SessionsReducer
})

export default RootReducer