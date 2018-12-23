import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_MESSAGES, REMOVE_MESSAGE } from '../actionTypes';
// Using the LOAD_MESSAGES and REMOVE_MESSAGES we can dispatch the actions to Load messages from the database and remove the message from the database.

// Now we will be making the function which will dispatch the action.

export const loadMessages = messages => ({
    type: LOAD_MESSAGES,
    messages
});

// Now we will be making apiCall to get all the messages from the database.

export const fetchMessages = () => {
    return dispatch => {
        return apiCall("GET", "/api/messages")
        .then(res => dispatch(loadMessages(res)))
        .catch(err => dispatch(addError(err.messages))
        );
    };
};

// Now we will be making the messages.js reducers to handle this fetchMessages value.