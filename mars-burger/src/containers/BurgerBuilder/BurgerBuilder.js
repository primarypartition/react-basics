import React, { Component } from 'react';

import Warpper from '../../hoc/Warpper';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';
import Modal from '../../components/UI/Modal/Modal';
import Order from '../../components/Burger/Order/Order';

const INGREDIENT_PRICES = {
  salad: 1,
  bacon: 1,
  cheese: 1,
  meat: 1
};

class BurgerBuilder extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ingredients: {
				salad: 0,
				bacon: 0,
				cheese: 0,
				meat: 0
			},
			totalPrice: 2,
			canOrder: true,
			canAddOrder: false
		}
	}

	canAddOrderHandler = () => {
		this.setState({canAddOrder: true});
	}

	modalClosedHandler = () => {
		this.setState({canAddOrder: false});
	}

	orderContinueHandler = () => {
		alert("Continue");
	}

	canOrderItem(ingredients) {		
		const sum = Object.keys(ingredients)
		                  .map((ikey) => {
		                  	return ingredients[ikey];	
		                  })
		                  .reduce((sum, el) => {
		                  	return sum + el;
		                  }, 0);

      	this.setState({
      		canOrder: ! (sum > 0)
      	});
	}

	addIngredientHandler = (type) => {
		const preCount =  this.state.ingredients[type];
		const newCount = preCount + 1;
		const newIngredients = {
			...this.state.ingredients
		};
		newIngredients[type] = newCount;

		const prePrice = this.state.totalPrice;
		const ingredientPrice = INGREDIENT_PRICES[type];
        const newPrice = prePrice + ingredientPrice;

        this.setState({
        	ingredients: newIngredients,
        	totalPrice: newPrice
        });

        this.canOrderItem(newIngredients);
    }

	removeIngredientHandler = (type) => {
		const preCount =  this.state.ingredients[type];

		if (preCount > 0) {
			const newCount = preCount - 1;
			const newIngredients = {
				...this.state.ingredients
			};
			newIngredients[type] = newCount;
		
			const prePrice = this.state.totalPrice;
			const ingredientPrice = INGREDIENT_PRICES[type];
	        const newPrice = prePrice - ingredientPrice;

	        this.setState({
	        	ingredients: newIngredients,
	        	totalPrice: newPrice
	        });

	        this.canOrderItem(newIngredients);
    	}
	}

	render() {
		const disabledInfo = {
			...this.state.ingredients
		}

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		return (<Warpper>
				  <Modal show={this.state.canAddOrder}
				         modalClosed={this.modalClosedHandler}>

				  	<Order ingredients={this.state.ingredients}
				  	       orderCancel={this.modalClosedHandler}
				  	       orderContiune={this.orderContinueHandler}
				  	       price={this.state.totalPrice}/>
				  	       
				  </Modal>	

			      <Burger ingredients={this.state.ingredients} />

			      <Controls ingredientAdd={this.addIngredientHandler}
			                ingredientRemove={this.removeIngredientHandler}
			                disabledInfo={disabledInfo} 
			                price={this.state.totalPrice}
			                canOrder={this.state.canOrder}
			                canAddOrder={this.canAddOrderHandler}/>
	    		</Warpper>);
	}
}

export default BurgerBuilder; 
