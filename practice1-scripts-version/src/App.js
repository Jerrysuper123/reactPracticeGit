// import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

function App() {
  const[userNameInput, setUserNameInput] = useState("Jerry Chen");

  const nameChangeHandler=(event)=>{
    setUserNameInput(event.target.value);
  };

  const style={
    backgroundColor:'blue',
    textAlign: 'center',
    cursor: 'pointer'
  };

  return (
    <div >
      <UserInput
      style={style}
      changed={nameChangeHandler}
      userName={userNameInput}
      />
      <UserOutput
      userName={userNameInput}
      />
      <UserOutput/>
    </div>
  );
}

export default App;
