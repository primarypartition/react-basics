import React, { Component } from 'react';

import Radium, { StyleRoot } from 'radium';
import './App.css';

import Person from './Person/Person';

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
    const style = {
        backgroundColor: 'green',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

    if (this.state.showPersons) {
      persons = (<div>
                { this.state.persons.map( (person, index) => {
                    return (<Person name= { person.name } 
                                    age= { person.age } 
                                    key={ person.id }
                                    changeNameAction= { (event) => this.changeNameHandler(event, person.id) }
                                    deletePersonAction= { () => this.deletePersonHandler(index) }/> ); })
                }
                </div>);

      style.backgroundColor = 'red';
    }

    return (
    <StyleRoot>
      <div className="App">              
        { persons }    
        
        <button style={ style }
                onClick= { this.toggleNameHandler }>
          Toggle List
        </button>       
      </div>
    </StyleRoot>);   
  }
}

export default Radium(App);
