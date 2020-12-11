import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './ValidationComponent/ValidationComponent';
import Char from './CharComponent/CharComponent.js'

class App extends Component {
  state= {
    userInput : ''
  }

  inputChangedHandler= event =>{
      this.setState({userInput: event.target.value});
  }

  deleteCharHandler =(index) =>{
    const text= this.state.userInput.split('');
    text.splice(index,1);
    const updatedText= text.join('');
    this.setState({userInput: updatedText});
  }
  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char character ={ch} 
      key= {index}
      click = {() => {this.deleteCharHandler(index)}} />
    })
    return (
      <div className="App">
        <p></p>
        <input
         type= "text"
         onChange= {this.inputChangedHandler}
         value= {this.state.userInput} ></input>
         <p>The entered user input : {this.state.userInput}</p>
         <Validation inputLength= {this.state.userInput.length}/>
         {charList}
      </div>
    );
  }
}

export default App;
 