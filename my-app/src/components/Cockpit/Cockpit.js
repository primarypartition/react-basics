import React from 'react';

const Cockpit = (props) => {

return (<div>
	      <h1>ITsAli.com</h1>  
          
          <button onClick = { props.toggleNameAction }>
           Toggle List
          </button>
        </div>  
		);
}

export default Cockpit;    
