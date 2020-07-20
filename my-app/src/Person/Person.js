import React from 'react';
import './Person.css';

var person = (props) => {
  let classes = ['h11', 'h12'].join(' ');

  return (<div>
            <div>
              <h1 className= { classes } >
                  Name: { props.name }, 
                  Age: { props.age }
              </h1>
            </div>

            <div>
              <input type="text" 
                     onChange= { props.changeNameAction }
                     value={ props.name } />
            </div>

            <div>
              <button className= "button"
                      onClick= { props.deletePersonAction }>
                Delete
              </button>
            </div>          
          </div>);
}

export default person;
