import React, { Component } from 'react';
import PropTypes from 'prop-types';

import css from './Ingredient.css';

class Ingredient extends Component {
	render() {
	let element = null;

	switch (this.props.type) {
		case ('bread-bottom'):
			element = (<div className={css.BreadBottom}></div>);
			break;

		case ('bread-top'):
			element = (<div className={css.BreadTop}>
						<div className={css.Seeds1}></div>
						<div className={css.Seeds2}></div>
					</div>);
			break;

		case ('meat'):
			element = (<div className={css.Meat}></div>);
			break;

		case ('cheese'):
			element = (<div className={css.Cheese}></div>);
			break;

		case ('salad'):
			element = (<div className={css.Salad}></div>);
			break;

		case ('bacon'):
			element = (<div className={css.Bacon}></div>);
			break;

		default:
			element = null;
	}

	return (element);
	
	}
}
 
Ingredient.propTypes = {
	type: PropTypes.string.isRequired
}

export default Ingredient;
