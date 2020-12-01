import React, { Component } from 'react';

import css from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

import Warpper from '../../../hoc/Warpper';

class Modal extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps !== this.props.show || nextProps.children !== this.props.children) {
			return true;
		}
	}

	render () {
		return (<Warpper>
					<Backdrop show={this.props.show}
					          removeBackdrop={this.props.modalClosed} />

					<div className={css.Modal}
					 style={{
					 	transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
					 	opacity:  this.props.show ? 1 : 0
					 }}>
						{this.props.children}
			    	</div>
		       </Warpper>);
	}
}

export default Modal;
