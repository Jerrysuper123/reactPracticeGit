import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

// use styled components div `css style` and make it a component StyleDiv, use it place of div below
// below media query does not have :
//write regular css below

class App extends Component {
  state = {
    persons: [
      { id: 'asda', name: "Jerry", age: 28 },
      { id: 'sdas', name: "manu", age: 27 },
      { id: 'xxx', name: "step", age: 26 }
    ],
    otherState: "some other value",
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = { ...this.state.persons[personIndex] }

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });

  };

  deleteNameHandler = (indexPerson) => {

    const persons = [...this.state.persons];
    persons.splice(indexPerson, 1);
    this.setState({ persons: persons });
  };


  render() {
    // inline style (using media query in inline style)
    const style = {

    };
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deleteNameHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangeHandler(event, person.id)}
              key={person.id}
            />
          })}
        </div>
      );

      style.backgroundColor = 'red';
    };

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); //['red]
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold'); //['red','bold']
    }

    return (
      // custom styled div wrapper
      <div className='App'>
        <h1>hi i am jerry</h1>
        <p className={classes.join(' ')}>Dynamic classname</p>
        <button
          className="button"
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

// wrap radium component over your app
export default App;
