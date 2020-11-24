import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

import Warpper from '../../hoc/Warpper';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios_orders from '../../axios-orders';
import * as actionTypes from '../../store/actions';

import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';
import Order from '../../components/Burger/Order/Order';

// const INGREDIENT_PRICES = {
//   salad: 1,
//   bacon: 1,
//   cheese: 1,
//   meat: 1
// };

class BurgerBuilder extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// ingredients: null,
			// totalPrice: 2,
			// canOrder: true,
			canAddOrder: false,
			loading: false,
			// error: false
		}
	}

	componentDidMount() {
		// axios_orders.get('/ingredients.json')
		//             .then((response) => {		            	
		//             	this.setState({ingredients: response.data})
		//             })
		//             .catch((error) => {
						
		// 			});;
	}

	canAddOrderHandler = () => {
		this.setState({canAddOrder: true});
	}

	modalClosedHandler = () => {
		this.setState({canAddOrder: false});
	}

	orderContinueHandler = () => {
		// this.setState({loading: true});

		// const order = {
		// 	ingredients: this.state.ingredients,
		// 	price: this.state.totalPrice,
		// 	customer: {
		// 		name: 'Ali',
		// 		address: {
		// 			street: '123 North Pole',
		// 			zipCode: '01234',
		// 			country: 'USA'
		// 		},
		// 		email: 'nomail@example.com'
		// 	},
		// 	deliveryMethod: 'fastest'
		// }

		// axios_orders.post('/orders.json', order)
		// 			.then((response) => {
		// 				this.setState({loading: false,
		//                				  canAddOrder: false});
		// 			})
		// 			.catch((error) => {
		// 				this.setState({loading: false,
		//                				  canAddOrder: false});
		// 			});

		// const queryParams = [];

  //       for (let i in this.state.ingredients) {
  //           queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
  //       }

  //       queryParams.push('price=' + this.props.price);

  //       const queryString = queryParams.join('&');
        
        this.props.history.push({
            pathname: '/checkout'//,
            // search: '?' + queryString
        });
	}

	canOrderItem(ingredients) {		
		let sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );

        return ! sum > 0;
	}

	// addIngredientHandler = (type) => {
	// 	const preCount =  this.state.ingredients[type];
	// 	const newCount = preCount + 1;
	// 	const newIngredients = {
	// 		...this.state.ingredients
	// 	};
	// 	newIngredients[type] = newCount;

	// 	const prePrice = this.state.totalPrice;
	// 	const ingredientPrice = INGREDIENT_PRICES[type];
 //        const newPrice = prePrice + ingredientPrice;

 //        this.setState({
 //        	ingredients: newIngredients,
 //        	totalPrice: newPrice
 //        });

 //        this.canOrderItem(newIngredients);
 //    }

	// removeIngredientHandler = (type) => {
	// 	const preCount =  this.state.ingredients[type];

	// 	if (preCount > 0) {
	// 		const newCount = preCount - 1;
	// 		const newIngredients = {
	// 			...this.state.ingredients
	// 		};
	// 		newIngredients[type] = newCount;
		
	// 		const prePrice = this.state.totalPrice;
	// 		const ingredientPrice = INGREDIENT_PRICES[type];
	//         const newPrice = prePrice - ingredientPrice;

	//         this.setState({
	//         	ingredients: newIngredients,
	//         	totalPrice: newPrice
	//         });

	//         this.canOrderItem(newIngredients);
 //    	}
	// }

	render() {
		const disabledInfo = {
			...this.props.ings
		}

		let orderSummary = null;

		if (this.props.ings) {
			orderSummary = (<Order ingredients={this.props.ings}
				  	       orderCancel={this.modalClosedHandler}
				  	       orderContiune={this.orderContinueHandler}
				  	       price={this.props.price}/>);
		}
			
		if (this.state.loading) {
			orderSummary = (<Spinner />);
		}

		for (let key in disabledInfo) {
			disabledInfo[key] = disabledInfo[key] <= 0;
		}

		let burger = (<Spinner />);

		if (this.props.ings) {
			burger = (<Warpper>

			     	 <Burger ingredients={this.props.ings} />

			      	 <Controls ingredientAdd={this.props.onIngredientAdded}
			                   ingredientRemove={this.props.onIngredientRemoved}
			                   disabledInfo={disabledInfo} 
			                   price={this.props.price}
			                   canOrder={this.canOrderItem(this.props.ings)}
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

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( BurgerBuilder, axios_orders ));
