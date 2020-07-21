import React from 'react';
import './Persons.css';
import Person from './Person/Person';

var persons = (props) => {
  return (props.persons.map( (person, index) => {
            return (<Person name = { person.name } 
                            age = { person.age } 
                            key = { person.id }
                            changeNameAction = { (event) => props.changeNameAction(event, person.id) }
                            deletePersonAction = { () => props.deletePersonAction(index) }/> ); })
          );
}

export default persons;
