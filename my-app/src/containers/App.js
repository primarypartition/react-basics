import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

import css from './App.css';

class App extends Component {
  state = {
    persons: [
      {id: 1, name: "Mary", age: "20"},  
      {id: 2, name: "John", age: "30"},
      {id: 3, name: "Pete", age: "40"}
    ],
    
    proStr: "Ut at lectus viverra, faucibus enim.",
    showPersons: true
  };

  switchNameHandler = (name) => {
    this.setState({
      persons: [
        {id: 1, name: "Mary", age: "20"},  
        {id: 2, name: "John", age: "30"},
        {id: 3, name: name, age: "40"}
      ]      
    })    
  };

  changeNameHandler = (event, id) => {
    let personIndex = this.state.persons.findIndex((person) => {
      return person.id == id;
    });

    let person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    let persons = [ ...this.state.persons ];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  };

  toggleNameHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    }) 
  };

  deletePersonHandler = (index) => {
    let personsList = [ ...this.state.persons ];
    personsList.splice(index, 1);

    this.setState({
      persons: personsList
    }) 
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (<div>      
                  <Persons persons = { this.state.persons }                             
                          changeNameAction = { this.changeNameHandler }
                          deletePersonAction = { this.deletePersonHandler }/>
                </div>);
    }

    return (<div className = { css.App }>  
              <Cockpit toggleNameAction = {this.toggleNameHandler }/>
              
              { persons }  
            </div>); 
    }
}

export default App;
