import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserInput from "./UserInput/UserInput.js";
import UserOutput from "./UserOutput/UserOutput.js";

class App extends Component {
  state = {
    usernames: [{ userName: "Mark" }, { userName: "Max" }, { userName: "Min" }],
  };

  userNameChangedHandler = (event) => {
    this.setState({
      usernames: [
        { userName: event.target.value },
        { userName: "Max" },
        { userName: "Min" },
      ],
    });
  };

  userNameChangedOnClickHandler = (newuser) => {
    this.setState({
      usernames: [
        { userName: newuser },
        { userName: "Max" },
        { userName: "Min" },
      ],
    });
  };

  render() {
    return (
      <div className="App">
        <p> Assignment 1</p>
        <UserInput
          changed={this.userNameChangedHandler}
          currentName={this.state.userName}
        />
        <UserOutput
          userName={this.state.usernames[0].userName}
          click={this.userNameChangedOnClickHandler.bind(this, "Jhon")}
        />
        <UserOutput userName={this.state.usernames[1].userName} />
        <UserOutput userName={this.state.usernames[2].userName} />
      </div>
    );
  }
}

export default App;
