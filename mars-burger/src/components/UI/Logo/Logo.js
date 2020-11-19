import React from 'react';

import css from './Logo.css';
import burgerLogo from '../../../assets/images/logo.jpg';

const Logo = (props) => {
	return (<div className={css.Logo} style={{height: props.height}}>
				<img src={burgerLogo} alt=""/>
		   </div>);
}

export default Logo;
