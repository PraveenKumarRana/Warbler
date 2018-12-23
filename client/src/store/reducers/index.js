import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import message from './messages';

const rootReducers = combineReducers({
    currentUser,
    errors,
    message
});

export default rootReducers;