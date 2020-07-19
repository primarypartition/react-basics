import React, { Component } from 'react';
import './App.css';

import Validation from './ValidationComponent/ValidationComponent';
import Char from './CharComponent/CharComponent';

class App extends Component {
  state= {           
            aString: "",
            aStringLength: 0
          }

  calStringLength= (event) => {    
    var str = event.target.value;
    var len = event.target.value.length;

    this.setState({
      aString: str,
      aStringLength: len
    });
  }

  render() {  

    return (
      <div className="App">
        <header className="App-header">          
          <input type="text" 
                 onChange={ this.calStringLength } 
                 value={ this.state.aString } />
        </header>

        <p className="App-intro">
          { this.state.aStringLength }
        </p>

        <Validation len= { this.state.aStringLength } />

        <Char str= { this.state.aString } />
      </div>
    );
  }
}

export default App;
