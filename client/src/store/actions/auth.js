import {apiCall} from '../../services/api';
import { SET_CURRENT_USER } from "../actionTypes";
import { addError, removeError } from './errors';

export function setCurrentUser(user){
    return{
        type: SET_CURRENT_USER,
        user
    }
}

export function authUser(type , userData){
    return dispatch => {
        // wrap our thunk in promise so we can wait for the API call
        return new Promise((resolve, reject) => {
            return apiCall("post", `/api/auth/${type}`, userData).then(
                ({token, ...user}) => {
                    localStorage.setItem("jwtToken", token);
                    dispatch(setCurrentUser(user));
                    // Now since here we will not get any error so we need to remove any of the previous error.
                    dispatch(removeError());
                    resolve(); // indicate that the API call is succeeded
                })
                .catch(err => {
                    // here we will be getting error so we will be adding the error in json here.
                    dispatch(addError(err.message));
                    reject(); // indicate the API call failed
                });
        });
    };
}