import React from 'react';

import css from './Layout.css';

import Warpper from '../../hoc/Warpper';

const Layout = (props) => {
	return (<Warpper>
				<div>Toolbar</div>
				<main className={css.Layout}>
					{props.children}
				</main>
			</Warpper>);
}

export default Layout;
