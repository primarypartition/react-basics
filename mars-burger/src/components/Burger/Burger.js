import React from 'react';

import css from './Burger.css'

import Ingredient from './Ingredient/Ingredient';

const Burger = (props) => {
	let ingredients = Object.keys(props.ingredients)
                              .map((ikey) => {
                              	return [...Array(props.ingredients[ikey])].map((_, i) => {
                              		return <Ingredient key={ikey + i} type={ikey} />                              		
                              	});
                              })
                              .reduce((arr, el) => {
                              	 return arr.concat(el);
                              }, []);                    

    if (ingredients.length === 0) {
    	ingredients = (<p>Please add ingredients in burger.</p>) ;
    }

	return (
		<div className={css.Burger}>
			<Ingredient type="bread-top" />
				{ingredients}
			<Ingredient type="bread-bottom" />
		</div>	
		);
}

export default Burger
