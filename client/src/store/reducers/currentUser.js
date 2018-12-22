import {SET_CURRENT_USER} from '../actionTypes';

const DEFAULT_STATE = {
    isAuthenticated: false, // the default value of the user.
    user:{} // This will have the user's data when someone is logged in else it will be empty.
}

export default (state=DEFAULT_STATE, action) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                isAuthenticated : !!Object.keys(action.user).length > 0,
                user: action.user
            };
        default:
            return state;
    }
}