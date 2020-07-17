import React from 'react';
import './UserOutput.css';

var UserOutput = (props) => {
  return (<div className="UserOutput">
	  	   		<div>
	  	   			<p>
	  	   				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Morbi vehicula odio quis velit aliquet scelerisque.
	  	   			</p>
	  	   			<p>
	  	   				Maecenas nec turpis nec eros tempus auctor nec id dolor.
								Ut varius ipsum id massa fringilla semper.
	  	   			</p>
	  	   		</div>  	

  	        <div>
  	        	Username: { props.user.username }
  	        </div>    
  	      </div>);
}

export default UserOutput;
