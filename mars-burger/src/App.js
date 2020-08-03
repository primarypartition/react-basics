import React, { Component } from 'react';

import css from './App.css';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className={css.App}>
      	<Layout>
      		<h1>Lorem ipsum dolor sit amet.</h1>
      		<BurgerBuilder />
      	</Layout>
      </div>
    );
  }
}

export default App;
