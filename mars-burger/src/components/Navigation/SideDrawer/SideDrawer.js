import React from 'react';

import css from './SideDrawer.css';
import Logo from '../../UI/Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';

import NavItems from '../NavItems/NavItems';
import Warpper from '../../../hoc/Warpper';

const SideDrawer = (props) => {
	let attachClasses = [css.SideDrawer, css.Close];

	if(props.show) {
		attachClasses = [css.SideDrawer, css.Open];
	}

	return (<Warpper>

			<Backdrop show={props.show}
					  removeBackdrop={props.close} />
			
			<div className={attachClasses.join(' ')}>
				<Logo height="20%"/>

				<nav>
					<NavItems />
				</nav>
		    </div>

		    </Warpper>);
}

export default SideDrawer;
