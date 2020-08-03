import React from 'react';

import css from './Modal.css';

const Modal = (props) => {
	return (<div className={css.Modal}>
				{props.children}
		    </div>);
};

export default Modal;
