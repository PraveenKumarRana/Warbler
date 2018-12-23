import { LOAD_MESSAGES, REMOVE_MESSAGE } from '../actionTypes';

export default message = (state=[], action) => {
    switch(action.type){
        case LOAD_MESSAGES:
            return { ...action.messages}
        default:
            return {...state}    
    }
}

// Now we will be combining all these to the rootReducer.