import {OPEN_SIDE_BAR, CLOSE_SIDE_BAR} from '../actions/ui_actions'


export default (state = {isOpen: true}, action)=>{
    switch(action.type){
        case OPEN_SIDE_BAR:
            return {isOpen: true}
        case CLOSE_SIDE_BAR:
            return {isOpen: false}
        default: return state
    }
}