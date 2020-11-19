import { NavLink } from 'react-router-dom';
import React from 'react';

import css from './NavItem.css';

const NavItem = (props) => {
	return (<li className={css.NavigationItem}>				
				<NavLink 
            		to={props.link}
            		exact={props.exact}
            		activeClassName={css.active}>{props.children}</NavLink>
			</li>);
}

export default NavItem;
