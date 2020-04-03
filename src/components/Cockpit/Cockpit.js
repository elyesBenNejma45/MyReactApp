import React from 'react';
import cls from './Cockpit.css'
const cockpit = (props) => {

//   const Styledbutton = Styled.button`
//   background-color: ${props => props.alt ? 'red':'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
  
//   &:hover{
//     background-color: ${props => props.alt ? 'salmon':'lightgreen'};
//     color: black;
//   }
//  `; 


    const classes = [];
    let btnClass = '';

    if(props.showPerson) {
      btnClass = cls.Red;
    }
    if(props.persons.length <= 2) {
      classes.push(cls.red);     
    }
    if(props.persons.length <= 1) {
      classes.push(cls.bold);
    }

    return (
    <div className = {cls.Cockpit}>
        <h1>Hi, I'm a React App</h1>
        <p className = {classes.join(' ')}>This is really working!</p>
        <button
         className = {btnClass}
         onClick ={props.clicked}> Toggle Persons
        </button>
    </div>
    );

};

export default cockpit;