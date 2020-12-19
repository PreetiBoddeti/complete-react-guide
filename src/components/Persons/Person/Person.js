import React, { Component } from "react";
import Aux from "../../../hoc/Auxiliary";
import PropTypes from "prop-types";
// import classes from "./Person.css";

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

class Person extends Component {
  constructor(props){
    super(props);
    this.inputElementRef= React.createRef();
  }
  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }
  render() {
    console.log("[Person.js] render");
    return (
      <Aux>
        {this.props.isAuth ? <p>Authenticated...!!!!</p> : <p>Please Log In </p>}
        <p onClick={this.props.click}>
          Hi, I am {this.props.name}. I am {this.props.age} years old.{" "}
          {this.props.children}
        </p>
        <input type="text"
        //  ref={(inputEl) => {this.inputElement = inputEl}} 
        ref={this.inputElementRef}
         onChange={this.props.changed}></input>
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default Person;
// export default Radium(person);
