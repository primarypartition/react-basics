import React from 'react';
import './Person.css';

var person = (props) => {
  return (<div>
  	        <h1>Name: { props.name }, Age: { props.age }</h1>
  	        <h2>Other: { props.children }</h2>

  	        <div>
              <input type = "text" 
                     onChange = { props.changeNameAction }
                     value = { props.name } />
            </div>

  	        <button type = "text" 
  	                onClick = { props.deletePersonAction } >
  	          Delete
  	        </button>
  	      </div>);
}

export default person;
