import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'asda', input: "Jerry"},
    ]
  }

  inputChangeHandler=(event)=>{
    if(event.target.value.length<5){
      this.setState({
        persons: [
          { id: 'asda', input: "Text too short"},
        ]
      });

    } else{
      this.setState({
        persons: [
          { id: 'asda', input: event.target.value},
        ]
      });
    }
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <ValidationComponent
        changed={this.inputChangeHandler}
        input={this.state.persons[0].input} 
        />
        <p>{this.state.persons[0].input}</p>
      </div>
    );
  }
}

export default App;
