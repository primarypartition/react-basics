import axios from 'axios';

const axios_orders = axios.create({
	baseURL: 'https://dev-burger-787c8.firebaseio.com/'
});

export default axios_orders;
