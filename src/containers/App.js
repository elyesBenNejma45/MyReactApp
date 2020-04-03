import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';


    //this is an inline styles
class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manu', age: 29 },
      { id: '3', name: 'Stephanie', age: 26 }
    ],
    
    otherState: 'some other value',
    showPerson: false
  }


  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    })

    const onePerson = {...this.state.persons[personIndex]};
          onePerson.name = event.target.value;
          
    const persons = [...this.state.persons];
          persons[personIndex] = onePerson;      

    this.setState( {
      persons:persons
    });
  }

  togglePersonHandler = () => {
     const doesShow = this.state.showPerson;
     this.setState({showPerson:!doesShow})
     
  }

  deleteTogglePerson = (index) => {
    //const  pr = this.state.persons.slice(); a copy of the persons array in the state
    const pr = [...this.state.persons]; //On ES6 a copy of an array
    pr.splice(index,1);
    this.setState({persons:pr});
  }

  render () {

    let pers = null;  
      if (this.state.showPerson) {
        
        pers = (
      <div>
          {
           <Persons
              persons = {this.state.persons}
              clicked = {this.deleteTogglePerson}
              changed = {this.switchNameHandler}
           />
           }
          
      </div> 
     );
          //  style.backgroundColor= "red";
          //  style[':hover'] = {
          //   backgroundColor:'salmon',
          //   color:'black',
          // }
      }
    return (
      <div className="App">
        <Cockpit
          persons = {this.state.persons}
          showPerson = {this.state.showPerson}
          clicked = {this.togglePersonHandler}
        />
      {pers}  
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}
    // it is a stateful component because it use state component which is usestate()
    //you can manage state in class but not in functional component
//Reacthooks is that to add new functionalities to functional components using useState
    //const [otherState, setOtherState] = useState("other state");
      //this is an inline style that we can use

      // React.createElement('div',null,React.createElement('h1',{className: 'App'},'does this work now')) // null is a javascript object, h1 is a children which is inside the div last argument is what is inside the children //h1 is introduced as a tex in the third element  
      //that what JSX do behind the scene
     //  state a reserved word and we should use it if we want to manage welle some component
      //div are created by React component it is not an html
      // props can handle functions
      //mousehover when the cursor is onto the element or its children
      // it is a package to wrapp components used in css for exemple to wrapp the pseudoclasses
      // styleroot is a special component to handle the media querries
      //Media Queries. Media queries are a feature of CSS that enable webpage content to adapt to different screen sizes and resolutions. 
export default App;
