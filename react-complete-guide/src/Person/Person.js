
import React from "react";
import './Person.css';

const person = (props) => {
    // use media query from radium, but you need to wrap your application in StyleRoot.
    // const style ={
    //     '@media (min-width:500px)':{
    //         width: '450px'
    //     }
    // }
    return (
        <div className="Person">
            <p onClick={props.click}>i am a {props.name} and i am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
}

export default person;