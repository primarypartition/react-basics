import React from 'react';

import css from './CheckoutSummary.css';
import Button from '../../UI/Button/Button';

import Burger from '../../Burger/Burger';

const CheckoutSummary = (props) => {
	return (<div className={css.CheckoutSummary}>
			<h1>Checkout Summary</h1>
			<div style={{width: '100%',		                 
		                 margin: 'auto'
		                 }}>
         		<Burger ingredients={props.ingredients}/>

			</div>

			<Button btnType="Danger" 
			        clicked={props.checkoutCancel}>
			        Cancel
	        </Button>

	        <Button btnType="Danger" 
			        clicked={props.checkoutContinue}>
			        Continue
	        </Button>
		</div>);

}

export default CheckoutSummary;
