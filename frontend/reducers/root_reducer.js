import sessionsReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import entitiesReducer from '../reducers/entities_reducer'
import { combineReducers } from 'redux'
import uiReducer from './ui_reducer';

const RootReducer = combineReducers({
    session: sessionsReducer,
    errors: errorsReducer,
    entities: entitiesReducer,
    ui: uiReducer
})

export default RootReducer