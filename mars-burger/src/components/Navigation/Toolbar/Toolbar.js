import React from 'react';

import css from './Toolbar.css';
import Logo from '../../UI/Logo/Logo';
import DrawerToggle from '../../UI/DrawerToggle/DrawerToggle';

import NavItems from '../NavItems/NavItems';

const Toolbar = (props) => {
	return (<header className={css.Toolbar}>
				<DrawerToggle clicked={props.drawToggleClicked} />

				<Logo height="80%"/>

				<nav className={css.DesktopOnly}>
					<NavItems isAuthenticated={props.isAuth} />
				</nav>
		    </header>);
}

export default Toolbar;
