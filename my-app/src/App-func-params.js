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
        {name: "Liz", age: "30"},
        {name: name, age: "40"}
      ] 
    })    
  };

  render() {

    return (<div className="App">
              <Person name={ this.state.persons[0].name } 
                      age={ this.state.persons[0].age }
                      actionName={ this.switchNameHandler.bind(this, 'Pete') }/>  
              <Person name={ this.state.persons[1].name } 
                      age={ this.state.persons[1].age }
                      actionName={ this.switchNameHandler.bind(this, 'Shrik') }/>   
              <Person name={ this.state.persons[2].name } 
                      age={ this.state.persons[2].age }
                      actionName={ this.switchNameHandler.bind(this, 'Boat') }/>
                      	  
              <button onClick={ () => { this.switchNameHandler('Steve') } }>
                Switch Name
              </button>       
            </div>);    

  }
}

export default App;
