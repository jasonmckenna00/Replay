import {combineReducers} from 'redux';
import loadingReducer from './loading_reducer';
import usersUIReducer from './users_ui_reducer';
import sideBarReducer from './side_bar_ui_reducer';
import searchVidsReducer from './search_vids_ui_reducer'

export default combineReducers({
    loading: loadingReducer,
    user: usersUIReducer,
    sidebar: sideBarReducer,
    searchVids: searchVidsReducer
})