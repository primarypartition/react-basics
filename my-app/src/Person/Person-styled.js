import React from 'react';

import styled from 'styled-components';
import './Person.css';

const StyleDiv = styled.div`
  width: 100%;
  border: 1px solid black;

  '@media (min-width: 500px)': {
    width: 80%;
  }`

const StyleButton = styled.button`
  background-color: ${ (props) => props.cond <= 3 ? 'red' : 'green' };

  &:hover {
    background-color: white;
  }`

var person = (props) => {
  let classes = ['h11', 'h12'].join(' ');
  let style= {
    backgroundColor: '#ff00ff'    
  };

  return (<StyleDiv>
            <div>
              <h1 className= { props.name.length <= 3 ? classes : null } >
                  Name: { props.name }, 
                  Age: { props.age }
              </h1>
            </div>

            <div>
              <input type="text" 
                     onChange= { props.changeNameAction }
                     value={ props.name } />
            </div>

            <div>
              <StyleButton cond= { props.name.length } 
                           onClick= { props.deletePersonAction }>
                Delete
              </StyleButton>
            </div>          
          </StyleDiv>);
}

export default person;
