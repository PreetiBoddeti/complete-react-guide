import React, { useState } from "react";
import { Component } from "react";
import styled from "styled-components";
import { StyleRoot } from "radium";
import Person from "./Person/Person";
import classes from "./App.css";
// import styled from "styled-components";
// import logo from "./logo.svg";

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red':'green'};
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px ;
//   cursor: pointer;
//   &:hover: {
//     background-color: ${props => props.alt ? 'salmon':'lightgreen'};
//     color: black
//   }
// `;

class App extends Component {
  state = {
    persons: [
      { id: "id1", name: "Max", age: 28 },
      { id: "id2", name: "Min", age: 25 },
      { id: "id3", name: "jack", age: 29 },
    ],
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Min", age: 25 },
        { name: "jack", age: 27 },
      ],
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  
  render() {
    let persons = null;
    let btnClass= '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
          
        </div>
      );
      btnClass= classes.Red;
      
    }
    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <StyleRoot>
        <div className={classes.App}>
          <h1>Hi, Welcome to the course ReactJs</h1>
          <p className={assignedClasses.join(" ")}>This is really working...!!!</p>
          <button className={btnClass} onClick={this.togglePersonHandler}>
            Toggle Persons
          </button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}
export default App;















//Radium
// export default Radium(App);

//app as a module
// const app = (props) => {
//   const [personsState, setPersonState] = useState({
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "Min", age: 25 },
//       { name: "jack", age: 29 },
//     ],
//   });

//   const switchNameHandler = (newName) => {
//     // console.log("Was Clicked..!!!");
//     setPersonState({
//       persons: [
//         { name: newName, age: 28 },
//         { name: "Min", age: 25 },
//         { name: "jack", age: 27 },
//       ],
//     });
//   };

//   return (
//     <div className="App">
//       <h1>Hi, Welcome to the course ReactJs</h1>
//       <p>This is really working...!!!</p>
//       <button onClick={switchNameHandler.bind(this, "Maxy")}>Switch Name</button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age} click= {switchNameHandler.bind(this, "Maxmilian")}>
//         My Hobbies are : cycling , dancing
//       </Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       />
//     </div>
//   );
//   // return(React.createElement('div',{className: 'App'},React.createElement('h1',{className: 'App-header'},'Hi, Welcome')));
// };

// export default app;
