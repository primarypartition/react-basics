import React from 'react';

import Radium from 'radium';
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

// var person = (props) => {
//   return (<div>
//   	        <h1>Name: { props.name }, Age: { props.age }</h1>
//   	        <div>
//   	        	<input type="text" onChange={ props.changeNameAction } value={ props.name } />
//   	        </div>    	    
//   	      </div>);
// }

// var person = (props) => {
//   return (<div>
//   	        <h1>Name: { props.name }, Age: { props.age }</h1>  	        
//   	        <div>
//   	        	<input type="text" value={ props.name } />
//   	        </div>    	    
//   	      </div>);
// }

// var person = (props) => {
//   let classes = ['h11', 'h12'].join(' ');
//   let style= {
//     backgroundColor: '#ff00ff',
//     ':hover': {
//       backgroundColor: '#9f6060'
//     }
//   }

//   return (<div>
//   					<div>
//   	        	<h1 className= { props.name.length <= 3 ? classes : null } >
//                   Name: { props.name }, 
//                   Age: { props.age }
//               </h1>
//   	        </div>

//   	        <div>
//   	        	<input type="text" 
//   	        	       onChange= { props.changeNameAction }
//   	        	       value={ props.name } />
//   	        </div>

//   	        <div>
//   	        	<button style= { style }
//                       onClick={ props.deletePersonAction }>
//   	        		Delete
// 	        		</button>
//   	        </div>    	    
//   	      </div>);
// }

var person = (props) => {
  let classes = ['h11', 'h12'].join(' ');
  let style= {
    backgroundColor: '#ff00ff',
    ':hover': {
      backgroundColor: '#9f6060'
    }
  };
  let mediaStyle= {
    '@media (min-width: 500px)': {
      width: '80%'
    }
  };

  return (<div className= "Person" style= { mediaStyle }>
            <div>
              <h1 className= { props.name.length <= 3 ? classes : null } >
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
              <button style= { style }
                      onClick={ props.deletePersonAction }>
                Delete
              </button>
            </div>          
          </div>);
}

export default Radium(person);
