import sessionsReducer from './session_reducer';
import errorsReducer from './errors_reducer';
// import EntitiesReducer from '../reducers/entities_reducer'
import { combineReducers } from 'redux'

const RootReducer = combineReducers({
    session: sessionsReducer,
    errors: errorsReducer

})

export default RootReducer