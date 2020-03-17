import React,{useState} from 'react';
import './App.css';
import Person from "./Person/Person";

const App = props => {
   const  [personState, setPersonState ] = useState({
      persons: [
        { name: "mike", age: '28'},
        { name: "elyes", age: '27'},
        { name: "jean", age: '29'}
      ] ,
    });
    // it is a stateful component because it use state component which is usestate()
    //you can manage state in class but not in functional component
//Reacthooks is that to add new functionalities to functional components using useState
    //const [otherState, setOtherState] = useState("other state");
    const switchNameHandler = (newName) => {
        setPersonState({
         persons: [
         { name: newName, age: '28'},
         { name: "mariem", age: '27'},
         { name: "jean", age: '26'}
      ],
      
      });
      
   }

  const nameChangeHandler = (event) => {
      setPersonState({
         persons: [
         { name: "newName", age: '28'},
         { name: event.target.value, age: '27'},
         { name: "jean", age: '26'}
      ],
      
      });
   }
      const style = {
         backgroundColor:"white",
         font: "inherit",
         border: "1px solid black",
         padding:"8px",
         cursor:"pointer"
      };
      //this is an inline style that we can use
       return (   
    <div className="App">
       <h1> Hi Elyes</h1>
       <h1> It's your first react App </h1>
       <button style= {style}onClick= {switchNameHandler.bind(this,"jean")}>switch Name</button>
       <Person 
       name={personState.persons[0].name} 
       age ={personState.persons[0].age}/>
       <Person 
        name={personState.persons[1].name}
        age ={personState.persons[1].age}
        click = {switchNameHandler.bind(this,"miki")}
        changed = {nameChangeHandler}
        > 
        My hobbies is: Racing
        </Person>
       <Person 
       name={personState.persons[2].name} 
       age ={personState.persons[2].age}/>
    </div>
      // React.createElement('div',null,React.createElement('h1',{className: 'App'},'does this work now')) // null is a javascript object, h1 is a children which is inside the div last argument is what is inside the children //h1 is introduced as a tex in the third element  
      //that what JSX do behind the scene
     );
     //  state a reserved word and we should use it if we want to manage welle some component
      //div are created by React component it is not an html
      // props can handle functions
   }

export default App;
