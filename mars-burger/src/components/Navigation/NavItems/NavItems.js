import React from 'react';

import css from './NavItems.css';

import NavItem from './NavItem/NavItem';

const NavItems = (props) => {
	return (<ul className={css.NavigationItems}>
				<NavItem link="/"> 
				  Burger Builder
				</NavItem>
			
				{props.isAuthenticated ? <NavItem link="/orders">Orders</NavItem> : null}
        		{!props.isAuthenticated
	            ? <NavItem link="/auth">Authenticate</NavItem>
	            : <NavItem link="/logout">Logout</NavItem>}		
		    </ul>);
}

export default NavItems;
