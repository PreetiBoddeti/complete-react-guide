import React from 'react'
import './Person.css'

const person = (props) =>{
    return (
    <div className="Person">
        <p onClick={props.click}>Hi, I am {props.name}. I am {props.age} years old. {props.children}</p>
        {/* <p>{props.children}</p> */}
        <input type= "text" onChange={props.changed} ></input>
    </div>
    );
}

export default person;