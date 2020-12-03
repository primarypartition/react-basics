import React, { Component } from 'react';
import { connect } from 'react-redux';

import css from './Layout.css';

import Warpper from '../../hoc/Warpper';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
	state = {
		showSideDrawer: false
	}

	sideDrawerCloseHandler = () => {
		this.setState({showSideDrawer: false});
	}

	sideDrawerToggleHandler = () => {
		this.setState((prevState) => {
						return {showSideDrawer: !prevState.showSideDrawer};
					});
	}

	render () {
		return (<Warpper>
					<Toolbar isAuth={this.props.isAuthenticated}
					         drawToggleClicked={this.sideDrawerToggleHandler} />

					<SideDrawer isAuth={this.props.isAuthenticated}
					            show={this.state.showSideDrawer}
					            close={this.sideDrawerCloseHandler} />

					<main className={css.Layout}>
						{this.props.children}
					</main>
				</Warpper>);
	}
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect( mapStateToProps )( Layout );
