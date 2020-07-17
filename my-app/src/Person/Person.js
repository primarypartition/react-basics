import React from 'react';
import './Person.css';

// function person() {
//   return (<h1>Hello Person 1</h1>);	
// }

// var person = function() {
//   return (<h1>Hello Person 2</h1>);
// }

// var person = () => {
//   return (<h1>Hello Person 3</h1>);
// }

// var person = () => {
//   return (<h1>Hello Person 4 - { 2 * 2 }</h1>);
// }

// var person = (props) => {
//   return (<div>
//   	        <h1>Name: { props.name }, Age: { props.age }</h1>
//   	        <h2>Other: { props.children }</h2>
//   	      </div>);
// }

// var person = (props) => {
//   return (<div>
//   	        <h1>Name: { props.name }, Age: { props.age }</h1>

//   	        <button onClick={ props.actionName }>Action</button>
//   	        <div>------------</div>
//   	      </div>);
// }

var person = (props) => {
  return (<div>
  	        <h1>Name: { props.name }, Age: { props.age }</h1>

  	        <div>
  	        	<input type="text" onChange={ props.changeNameAction } value={ props.name } />
  	        </div>  
  	    
  	      </div>);
}

export default person;
