import React from 'react';

function UserInput(props) {
    return (
        <input text="value" onChange={props.changed} value={props.userName}/>
    );
}

export default UserInput;
