import React from 'react';
import DefaultProfileImage from "../images/default-profile-image.jpg";

const UserAside = ({ profileImageUrl, username}) => (
    <aside classname="col-sm-2">
        <div className="panel panel-default">
            <div className="panel-body">
                <img src={profileImageUrl || DefaultProfileImage} alt={username} 
                width="200" height="200" className="img-tumbnail" />
            </div>
        </div>
    </aside>
)

export default UserAside;