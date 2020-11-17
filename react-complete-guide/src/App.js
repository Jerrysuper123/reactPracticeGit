import React, { Component } from 'react';
//due to configuration, we can import classes from
//we can use classes to house all css
import classes from './App.css';

import Person from './Person/Person';

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
    let persons = null;

// access Button from classes CSS
    let btnClass = classes.Button;

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

      // style.backgroundColor = 'red';
      btnClass.push(classes.Red);
    };

    const assignmentClasses = [];
    if (this.state.persons.length <= 2) {
      assignmentClasses.push(classes.red); //['red]
    }

    if (this.state.persons.length <= 1) {
      assignmentClasses.push(classes.bold); //['red','bold']
    }

    return (
      <div className={classes.App}>
        <h1>hi i am jerry</h1>
        <p className={assignmentClasses.join(' ')}>Dynamic classname</p>
        <button
          className={btnClass.join(' ')}
          onClick={this.togglePersonHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
