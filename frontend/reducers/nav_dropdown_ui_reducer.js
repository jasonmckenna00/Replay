import {OPEN_DROP_DOWN, CLOSE_DROP_DOWN} from '../actions/ui_actions'


export default (state = {isOpen: false}, action)=>{
    switch(action.type){
        case OPEN_DROP_DOWN:
            debugger
            return {isOpen: true}
        case CLOSE_DROP_DOWN:
            return {isOpen: false}
        default: return state
    }
}