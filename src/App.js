import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
  
    let pers = null;  
      if (this.state.showPerson) {
        
        pers = (
      <div>
          {/* <Person 
           name={this.state.persons[0].name} 
           age={this.state.persons[0].age} />
        <Person 
           name={this.state.persons[1].name} 
           age={this.state.persons[1].age}
           click={this.switchNameHandler.bind(this, 'Max!')}
           changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
        <Person 
           name={this.state.persons[2].name} 
           age={this.state.persons[2].age} /> */}
           {this.state.persons.map((person,index) => {
             return <Person 
                      click = { () => this.deleteTogglePerson(index)}
                      name = {person.name}
                      age  = {person.age}
                      key = {person.id}
                      changed = { (event) => this.nameChangedHandler(event,person.id) }
                    />
           })}
      </div> 
     );

      }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={style}
          onClick={this.togglePersonHandler }>Toggle Persons</button>
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
export default App;
