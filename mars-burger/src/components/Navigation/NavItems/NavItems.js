import React from 'react';

import css from './NavItems.css';

import NavItem from './NavItem/NavItem';

const NavItems = (props) => {
	return (<ul className={css.NavigationItems}>
				<NavItem link="/"
				         active={true}> 
				  Burger Builder
				</NavItem>

				<NavItem link="/"
				         active={false}> 
				  Checkout
				</NavItem>				
		    </ul>);
}

export default NavItems;
