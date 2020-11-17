import React from 'react';
import userOutput from './style.css';

function UserOutput(props) {
    return (
        <div className="userOutput">
            <p>{props.userName}</p>
            <p>haha</p>
        </div>
    );
}

export default UserOutput;
