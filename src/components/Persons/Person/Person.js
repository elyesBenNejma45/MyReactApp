import React from 'react';
import classes from './Person.module.css'
//import Styled from 'styled-components';

// const StyledComponent = Styled.div`
// width: 60%;
// margin: 16px auto;
// border: 1px solid #eee;
// box-shadow: 0 2px 3px #ccc;
// padding:16px;
// text-align: center;

// @media (min-width:450px):{
//   width:500px
// }
// `;


const person = (props) => {
    return (
        <div className= {classes.Person}> 
                <p onClick = {props.click}> I'm {props.name} and I'm {props.age} old </p>
                <p> {props.children}</p>
                <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
}
// it is a stateless components because it does not contain a state management
// props refers to the attributs of every components
//children refers to any elements between the opening and cloding tags of a component
export default person;