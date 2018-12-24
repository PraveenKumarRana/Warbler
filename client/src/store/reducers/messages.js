import { LOAD_MESSAGES, REMOVE_MESSAGE } from '../actionTypes';

export default (state=[], action) => {
    debugger;
    switch(action.type){
        case LOAD_MESSAGES:
            return [ ...action.message];
        case REMOVE_MESSAGE:
            return state.filter(message => message._id !== action.id);
        default:
            return {...state}    
    }
}

// Now we will be combining all these to the rootReducer.