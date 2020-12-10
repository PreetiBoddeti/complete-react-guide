import React from 'react';
import './UserOutput.css'

const userOutput = (props) =>{
    return (
        <div className='UserOutput'>
            <p onClick={props.click}>Hi {props.userName} !!!</p>
            <p>Welcome to the user output functional module!!!</p>
        </div>
    )
}

export default userOutput;