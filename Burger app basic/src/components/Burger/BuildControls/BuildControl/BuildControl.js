import React from 'react';
import classes from './BuildControl.css'


const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div>{props.label}</div>
        <button 
        className={classes.Less}
        onClick={props.removed}
        // below will disable button to unshow, "disabled=true" will disable the button, you cannot click less button anymore
        disabled={props.disabled}
        >Less</button>
        <button
            className={classes.More}
            onClick={props.added}
        >More</button>
    </div>
);

export default buildControl;