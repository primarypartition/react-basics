import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

import Warpper from '../../hoc/Warpper';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios_orders from '../../axios-orders';

import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';
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
			ingredients: null,
			totalPrice: 2,
			canOrder: true,
			canAddOrder: false,
			loading: false
		}
	}

	componentDidMount() {
		axios_orders.get('/ingredients.json')
		            .then((response) => {		            	
		            	this.setState({ingredients: response.data})
		            })
		            .catch((error) => {
						
					});;
	}

	canAddOrderHandler = () => {
		this.setState({canAddOrder: true});
	}

	modalClosedHandler = () => {
		this.setState({canAddOrder: false});
	}

	orderContinueHandler = () => {
		this.setState({loading: true});

		const order = {
			ingredients: this.state.ingredients,
			price: this.state.totalPrice,
			customer: {
				name: 'Ali',
				address: {
					street: '123 North Pole',
					zipCode: '01234',
					country: 'USA'
				},
				email: 'nomail@example.com'
			},
			deliveryMethod: 'fastest'
		}

		axios_orders.post('/orders.json', order)
					.then((response) => {
						this.setState({loading: false,
		               				  canAddOrder: false});
					})
					.catch((error) => {
						this.setState({loading: false,
		               				  canAddOrder: false});
					});
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

		let orderSummary = null;

		if (this.state.ingredients) {
			orderSummary = (<Order ingredients={this.state.ingredients}
				  	       orderCancel={this.modalClosedHandler}
				  	       orderContiune={this.orderContinueHandler}
				  	       price={this.state.totalPrice}/>);
		}
			
		if (this.state.loading) {
			orderSummary = (<Spinner />);
		}

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		let burger = (<Spinner />);

		if (this.state.ingredients) {
			burger = (<Warpper>

			     	 <Burger ingredients={this.state.ingredients} />

			      	 <Controls ingredientAdd={this.addIngredientHandler}
			                   ingredientRemove={this.removeIngredientHandler}
			                   disabledInfo={disabledInfo} 
			                   price={this.state.totalPrice}
			                   canOrder={this.state.canOrder}
			                   canAddOrder={this.canAddOrderHandler}/>

			         </Warpper>);
		}

		return (<Warpper>
				  <Modal show={this.state.canAddOrder}
				         modalClosed={this.modalClosedHandler}>

				  	{orderSummary}
				  	       
				  </Modal>	

		  		  {burger}

	    		</Warpper>);
	}
}

export default withErrorHandler(BurgerBuilder, axios_orders); 
