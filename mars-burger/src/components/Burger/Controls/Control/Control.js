import React from 'react';

import css from './Control.css';

const Control = (props) => {
	return (<div className={css.BuildControl}>
			  <div className={css.Label}>{props.label}</div>
			  <button className={css.Less} 
			          onClick={props.remove}
			          disabled={props.disabledInfo}>
	          	Less
	          </button>
			  <button className={css.More}
			          onClick={props.add}>
			    More
		      </button>
			</div>);
}

export default Control;
