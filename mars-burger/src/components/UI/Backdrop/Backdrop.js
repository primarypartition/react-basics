import React from 'react';

import css from './Backdrop.css';

const Backdrop = (props) => {
	return (
		props.show ? <div className={css.Backdrop} onClick={props.removeBackdrop}></div> : null
		);
}

export default Backdrop;
