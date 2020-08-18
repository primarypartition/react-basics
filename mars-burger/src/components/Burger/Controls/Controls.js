import React from 'react';

import css from './Controls.css';

import Control from './Control/Control';

const list = [
  {label: 'Salad', type: 'salad'},
  {label: 'Bacon', type: 'bacon'},
  {label: 'Cheese', type: 'cheese'},
  {label: 'Meat', type: 'meat'}
];

const Controls = (props) => {
  return (<div className={css.BuildControls}>
  			<div>Total Price: {props.price.toFixed(2)}</div>
  			{list.map((item) => {
  				return <Control key={item.label} 
  				                label={item.label}
  				                type={item.type}
  				                disabledInfo={props.disabledInfo[item.type]}
  				                add={() => props.ingredientAdd(item.type)}
  				                remove={() => props.ingredientRemove(item.type)} /> 
  			})}
  			<button className={css.OrderButton}
  			        disabled={props.canOrder}
                onClick={props.canAddOrder}>
  				Order Now!
  			</button>
  	     </div>); 
}

export default Controls;
