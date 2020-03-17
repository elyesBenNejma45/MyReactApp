import React from 'react';
import"./Person.css"
const person = (props) => {
    return (
        <div className= "Person"> 
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