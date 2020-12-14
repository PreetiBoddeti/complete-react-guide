import React from "react";
import classes from "./Person.css";

// const styledDiv =styled.div`
//     width: 60%;
//     margin: auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width: 500px)':{
//         width: '450px'
//     }
// `;

const person = (props) => {
  
  return (
    <div className={classes.Person} >
      <p onClick={props.click}>
        Hi, I am {props.name}. I am {props.age} years old. {props.children}
      </p>
      <input type="text" onChange={props.changed}></input>
    </div>
  );        
};

export default person;
// export default Radium(person);
