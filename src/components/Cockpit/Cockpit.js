import React from 'react';
import Styled from 'styled-components';

const cockpit = (props) => {

  const Styledbutton = Styled.button`
  background-color: ${props => props.alt ? 'red':'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover{
    background-color: ${props => props.alt ? 'salmon':'lightgreen'};
    color: black;
  }
  `;     
    let classes = [];
    if(props.persons.length <=2) {
      classes.push('red');     
    }
    if(props.persons.length <=1) {
      classes.push('bold');
    }
    return (
    <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className = {classes.join('')}>This is really working!</p>
        <Styledbutton clicked={props.clicked}>
          Toggle Persons
        </Styledbutton>
    </div>
    );

};

export default cockpit;