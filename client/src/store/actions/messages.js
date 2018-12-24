import { apiCall } from '../../services/api';
import { addError } from './errors';
import { LOAD_MESSAGES, REMOVE_MESSAGE } from '../actionTypes';
// Using the LOAD_MESSAGES and REMOVE_MESSAGES we can dispatch the actions to Load messages from the database and remove the message from the database.

// Now we will be making the function which will dispatch the action.

export const loadMessages = messages => ({
    type: LOAD_MESSAGES,
    messages
});

// function which will dispatch the action for the removal of the message.
export const remove = id => ({
    type: REMOVE_MESSAGE,
    id
});

// Now we will be making apiCall for the deletion of the message.
export const removeMessage = (user_id, message_id) => {
    return dispatch => {
        return apiCall("delete", `/api/users/${user_id}/messages/${message_id}`)
        .then( () => {
            dispatch(remove(message_id));
        })
        .catch( err => {
            dispatch(addError(err.message));
        })
    };
};

// Now we will be making apiCall to get all the messages from the database.

export const fetchMessages = () => {
    return dispatch => {
      return apiCall("get", "/api/messages")
        .then(res => {
          dispatch(loadMessages(res));
        })
        .catch(err => {
          dispatch(addError(err.message));
        });
    };
};

// Now we will be making the messages.js reducers to handle this fetchMessages value.

// making new message request

export const postNewMessage = text => (dispatch , getState ) => {
    let { currentUser } = getState();
    const id = currentUser.user.id;
    return apiCall("post", `/api/users/${id}/messages`, { text })
    .then(res => {})
    .catch(err => {
        dispatch(addError(err.message))
    });
}