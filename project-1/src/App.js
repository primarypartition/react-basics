import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users: [
      { username: "joe" },
      { username: "john" }
    ]
  };

  updateUsername = (event) => {    
    this.setState({
        users: [
          { username: event.target.value },
          { username: "john" }
        ]
    });
  }

  render() {
    return (
      <div className="App">        
        <UserOutput user= { this.state.users[0] } />
        <UserInput actionUpdateUsername= { this.updateUsername }
                   user= { this.state.users[0] } />
        
        <UserOutput user= { this.state.users[1] } />
        <UserInput actionUpdateUsername= { this.updateUsername }
                   user= { this.state.users[1] } />
      </div>
    );
  }
}

export default App;
