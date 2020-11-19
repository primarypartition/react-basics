import React from 'react';

import css from './NavItems.css';

import NavItem from './NavItem/NavItem';

const NavItems = (props) => {
	return (<ul className={css.NavigationItems}>
				<NavItem link="/"> 
				  Burger Builder
				</NavItem>

				<NavItem link="/orders"> 
				  Orders
				</NavItem>			
		    </ul>);
}

export default NavItems;
