
import React from "react";
// we have to import Css to merge with JSX code
import './Person.css';

const ValidationComponent = (props) => {
    return (
        <div className="Person">
            <input type="text" onChange={props.changed} value={props.input}/>
        </div>
    );
}

export default ValidationComponent;