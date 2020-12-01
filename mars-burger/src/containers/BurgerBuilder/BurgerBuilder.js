import React, { Component } from 'react';
import { connect } from 'react-redux';

import Modal from '../../components/UI/Modal/Modal';
import Spinner from '../../components/UI/Spinner/Spinner';

import Warpper from '../../hoc/Warpper';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios_orders from '../../axios-orders';
import * as actions from '../../store/actions/index';

import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Burger/Controls/Controls';
import Order from '../../components/Burger/Order/Order';

class BurgerBuilder extends Component {
	state = {
        canAddOrder: false
    }

	componentDidMount() {		
		this.props.onInitIngredients();
	}

	canAddOrderHandler = () => {
		this.setState({canAddOrder: true});
	}

	modalClosedHandler = () => {
		this.setState({canAddOrder: false});
	}

	orderContinueHandler = () => {	
        this.props.onInitPurchase();

        this.props.history.push({
            pathname: '/checkout'
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

		let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

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
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler( BurgerBuilder, axios_orders ));
