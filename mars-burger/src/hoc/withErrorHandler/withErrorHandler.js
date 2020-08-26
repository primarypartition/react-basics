import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Warpper from '../Warpper';

const withErrorHandler = (WrappedComponent, axios) => {
	return class extends Component {
		state = {
			error: null
		};

		componentDidMount () {
			this.reqInt = axios.interceptors.request.use((request) => {
				this.setState({error: null});

				return request;
			});

			this.resInt = axios.interceptors.response.use((response) => response, (error) => {
				this.setState({error: error});
			});
		}

		componentWillUnmount () {
			axios.interceptors.request.eject(this.reqInt);
			axios.interceptors.response.eject(this.resInt);
		}

		errorConfirmHandler = () => {
			this.setState({error: null});
		}

		render () {
			return (<Warpper>
				
						<Modal show={this.state.error}
						       modalClosed={this.errorConfirmHandler}>
							{this.state.error ? this.state.error.message : null}
						</Modal>

						<WrappedComponent {...this.props} />
				
					</Warpper>);
			}
	}
}

export default withErrorHandler;
