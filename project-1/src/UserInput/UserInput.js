import React from 'react';
import './UserInput.css';

var UserInput = (props) => {
	const inputStyle = {
        	border: '2px solid red'
  			};

  return (<div>  	   
  	    		<div>
  	        	<input type= "text" 
  	        	       onChange= { props.actionUpdateUsername }
  	        	       value= { props.user.username }
  	        	       style= { inputStyle } />
  	        </div>
  	      </div>);
}

export default UserInput;