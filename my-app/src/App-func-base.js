import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
	const [ currentState, setCurrentState ] = useState({
    persons: [
      {name: "Mary", age: "20"},  
      {name: "John", age: "30"},
      {name: "Pete", age: "40"}
    ]
  });

	useState({ 
    proStr: "Ut at lectus viverra, faucibus enim."
  });

	const switchNameHandler = () => {
    setCurrentState({
      persons: [
        {name: "Mary", age: "20"},  
        {name: "Liz", age: "30"},
        {name: "Pete", age: "40"}
      ] 
    })    
  };

	return (<div className="App">
						<Person name={ currentState.persons[0].name } 
                    age={ currentState.persons[0].age }/>  
            <Person name={ currentState.persons[1].name } 
                    age={ currentState.persons[1].age }/>   
            <Person name={ currentState.persons[2].name } 
                    age={ currentState.persons[2].age }/>
         
            <button onClick={ switchNameHandler }>
              Switch Name
            </button>   
					</div>);
}

export default App;
