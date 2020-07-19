import React from 'react';

let Char = (props) => {
	let style= { display: "inline-block", 
		         padding: "16px", 
		         textAlign: "center", 
		         margin: "16px", 
	             border: "1px solid black" };

	let list= [...props.str];
	let cDiv= [];

	for(let i=0; i<list.length; i++) {
		var c= list[i];

		cDiv[i] = (<div style={ style } 
			            key= { i } > 
			         { c }
			       </div>);
	}

	return (
		<div>
			{ cDiv }
		</div>	
		);
}


export default Char
