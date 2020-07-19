import React from 'react';

let Validation = (props) => {
	let msg= "";

	if(props.len <= 5) {
		msg= "String is too short.";
	} else if (props.len >= 10) {
		msg= "String is too long.";
	}

	return (
		<div>
			{ msg }
		</div>	
		);
}

export default Validation
