import React, { Component } from 'react';

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
					<Toolbar drawToggleClicked={this.sideDrawerToggleHandler} />

					<SideDrawer show={this.state.showSideDrawer}
					            close={this.sideDrawerCloseHandler} />

					<main className={css.Layout}>
						{this.props.children}
					</main>
				</Warpper>);
	}
}

export default Layout;
