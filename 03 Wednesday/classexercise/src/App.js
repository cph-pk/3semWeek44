import logo from './logo.svg';
import './App.css';
import Dateexample from './StatefulClassComponent';
import NameList from './ListAndKeys';
import Albums from './UseEffect';
import React, { useState } from 'react';

function App() {
  // a statefull function using useState() to read input from a input field 
  // (as characters are entered) and add it to a list that gets updated on the page.
  const [myValue, setMyValue] = useState("");

  // Array list for ListAndKeys.js
  const names = ["Per", "Mick", "Alex", "Morten", "Jean-Paul"];

  return (
    <div className="App">
      <Dateexample/>
      <br/>
      <input type="myInput" placeholder="Skriv løs" value={myValue} onChange={(event) =>setMyValue(event.target.value)}/>
      <p>{myValue}</p>
      <br/>
      <NameList names={names} />
      <br/>
      <Albums/>
    </div>
  );
}

export default App;
