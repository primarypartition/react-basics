import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Mary", age: "20"},  
      {name: "John", age: "30"},
      {name: "Pete", age: "40"}
    ],
    
    proStr: "Ut at lectus viverra, faucibus enim."
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        {name: "Mary", age: "20"},  
        {name: "Liz", age: "30"},
        {name: "Pete", age: "40"}
      ] 
    })    
  };

  render() {

    return (<div className="App">
              <Person name={ this.state.persons[0].name } 
                      age={ this.state.persons[0].age }/>  
              <Person name={ this.state.persons[1].name } 
                      age={ this.state.persons[1].age }/>   
              <Person name={ this.state.persons[2].name } 
                      age={ this.state.persons[2].age }/>
           
              <button onClick={ this.switchNameHandler }>
                Switch Name
              </button>       
            </div>);

    // return (<div className="App">
    //           <Person name="Mary" age="20"/>  
    //           <Person name="Tom" age="30"/>   
    //           <Person name="Joe" age="50">
    //             Ut at lectus viverra, faucibus enim in, suscipit est.
    //           </Person>         
    //         </div>);

    // return ( <div className="App">
    //             <Person />            
    //          </div> );

    // return ( <div className="App">
    //             <Person /> 
    //             <Person />
    //          </div> );

    // return ( <Person /> );

    // return (
    //   <div className="App">
    //     <h1>Cras nec quam nec metus pretium sodales ac lacinia nibh.</h1>
    //     <h2>Morbi vehicula odio quis velit aliquet scelerisque.</h2>
    //   </div>
    // );

    // return React.createElement('div', 
    //                        null, 
    //                        'h1',
    //                        'Hello World 2');

    // return React.createElement('h1', 
    //                        		null,
    //                        		'Hello World 3');

    // return React.createElement('div', 
    //                        		null,
    //                        		React.createElement(
    //                      			'h1',
    //                        		{className: 'h1'},
    //                        		'Hello World 4'
    //                        		));

  }
}

export default App;
