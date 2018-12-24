import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import DefaultProfileImageUrl from '../images/default-profile-image.jpg';

const MessageItem = ({text, date, username, profileImageUrl, removeMessage, isCorrectUser}) => (
    <div>
        <li className="list-group-item">
            <img src={profileImageUrl || DefaultProfileImageUrl} alt={username} height="100" width="100" className="timeline-image"/>
            <div className="message-area">
                <Link to='/'>@{username} &nbsp;</Link>
                <span className="text-muted">
                    <Moment className="text-muted" format="DD MM YYYY">
                        {date}
                    </Moment>
                </span>
                <p>
                    {text}
                </p>
                {isCorrectUser && (
                    <a className="btn btn-danger" onClick={removeMessage}>
                        Delete
                    </a>  
                )}
            </div>
        </li>
    </div>
)

export default MessageItem;