import React from "react";
import { Component } from "react";
import Persons from "../components/Persons/Persons";
import classes from "./App.css";
import Cockpit from "../components/Persons/Cockpit/Cockpit.js";
import WithClass from "../hoc/withClass";
// import Aux from "../hoc/Auxiliary";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      { id: "id1", name: "Max", age: 28 },
      { id: "id2", name: "Min", age: 25 },
      { id: "id3", name: "jack", age: 29 },
    ],
    showPersons: false,
    showcockpit: true,
    authenticated:  false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps");
    return state;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("[App.js] componentWillUnmount");
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Min", age: 25 },
        { name: "jack", age: 27 },
      ],
    });
  };

  logInHandler = () =>{
    this.setState({authenticated:  true});
  }

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
    console.log("[App.js] render");
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated = {this.state.authenticated}
        />
      );
    }

    return (
      <WithClass classes={classes.App}>
        <button
          onClick={() => {
            this.setState({ showcockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showcockpit ? <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          personsLength={this.state.persons.length}
          persons={this.state.persons}
          clicked={this.togglePersonHandler}
          logIn= {this.logInHandler}
        /> : null}
        {persons}
      </WithClass>
    );
  }
}
export default App;
