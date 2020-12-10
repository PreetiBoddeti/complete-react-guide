import React from 'react';

const inputStyle = {
    border : '2px solid red'
}
const userInput = (props) =>{
    return(
        <input type="text" onChange={props.changed} value={props.currentName}></input>
    )
}

export default userInput;