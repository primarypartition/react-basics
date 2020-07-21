import React from 'react';

import './Person.css';

var person = (props) => {
  return (<div>
  	        <h1>Name: { props.name }, Age: { props.age }</h1>
  	        <h2>Other: { props.children }</h2>

  	        <button type="text" onChange={ props.changeNameAction } value={ props.name } >
  	          Action
  	        </button>
  	      </div>);
}

export default person;
