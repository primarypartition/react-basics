import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Mary", age: "20"},  
      {name: "John", age: "30"},
      {name: "Pete", age: "40"}
    ],
    
    proStr: "Ut at lectus viverra, faucibus enim."
  };

  switchNameHandler = (name) => {
    this.setState({
      persons: [
        {name: "Mary", age: "20"},  
        {name: "John", age: "30"},
        {name: name, age: "40"}
      ] 
    })    
  };

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        {name: "Mary", age: "20"},  
        {name: "John", age: "30"},
        {name: event.target.value, age: "40"}
      ] 
    })    
  };

  render() {

    return (<div className="App">
              <Person name={ this.state.persons[0].name } 
                      age={ this.state.persons[0].age }
                      changeNameAction={ this.changeNameHandler } />  
              <Person name={ this.state.persons[1].name } 
                      age={ this.state.persons[1].age }/>   
              <Person name={ this.state.persons[2].name } 
                      age={ this.state.persons[2].age }/>
           
              <button onClick={ this.switchNameHandler }>
                Switch Name
              </button>         
            </div>);    

  }
}

export default App;
