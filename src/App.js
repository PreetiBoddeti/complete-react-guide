import React, { useState } from "react";
import { Component } from "react";
// import logo from "./logo.svg";
import Person from "./Person/Person";
import "./App.css";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Min", age: 25 },
      { name: "jack", age: 29 },
    ],
  };

  switchNameHandler = (newName) => {
    // console.log("Was Clicked..!!!");
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Min", age: 25 },
        { name: "jack", age: 27 },
      ],
    });
  };

  nameChangedHandler = (event) => {
    persons: [
      { name: "Max", age: 28 },
      { name: event.target.value, age: 25 },
      { name: "jack", age: 27 },
    ];
  };
  render() {
    const style= {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px ',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, Welcome to the course ReactJs</h1>
        <p>This is really working...!!!</p>
        <button
          style = {style}
          onClick={this.switchNameHandler.bind(this, "Maxy")}>
          Switch Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Maxmilian")}
          changed={this.nameChangedHandler}
        >
          My Hobbies are : cycling , dancing
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
    // return(React.createElement('div',{className: 'App'},React.createElement('h1',{className: 'App-header'},'Hi, Welcome')));
  }
}

export default App;

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
