import React, { useState } from 'react';
import './App.css';
import Counter from './Counter';


function App() {
  const [state,setState]=useState(false);
  return (
    <div className="App">
      <header className="App-header">
       <h1 onClick={()=>setState(!state)}>Show/Hide</h1>
      </header>
      {  state &&  <Counter/> }
    </div>
    
  );
}

export default App;
