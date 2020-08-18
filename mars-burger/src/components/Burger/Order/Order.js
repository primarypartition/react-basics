import React, { Component } from 'react';

import Warpper from '../../../hoc/Warpper';
import Button from '../../UI/Button/Button';

class Order extends Component  {
	componentDidUpdate() {
		console.log("Order Did Update");
	}

	render () {
		const ingSum = Object.keys(this.props.ingredients).map((igkey) => {
			return (<li key={igkey}>
					<span style={{textTransfrom: 'capitalize'}}>
						{igkey}:
					</span> 
						{this.props.ingredients[igkey]}
					</li>);
		});

		return (
			<Warpper>
				<h3>Order Summary</h3>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				</p>

				<ul>
					{ingSum}
				</ul>

				<div>
					Price: {this.props.price.toFixed(2)}
				</div>

				<p>
					Continue to Checkout
				</p>

				<Button clicked={this.props.orderCancel}
						btnType="Danger">
					Cancel
				</Button>
				<Button clicked={this.props.orderContiune}
						btnType="Success">
					Continue
				</Button>
			</Warpper>);
	}
}

export default Order;
