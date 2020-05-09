import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [numberone, setnumberone]= useState(0); 
  const [numbertwo, setnumbertwo] = useState(0);
  const [result, setResult] = useState(0);
  

  return (
    <div className="App">
        Calculator
        <form>
  <label>
    Number 1:
    <input type="number" value={numberone} onChange={e => setnumberone(e.target.value)} number="input 1" />
  </label>
  <label>
    Number 2:
    <input type="number" value={numbertwo} onChange={e => setnumbertwo(e.target.value)} number="input 2" />
  </label>
  <button onClick={() => {setResult(numberone + numbertwo)}}>
    submit
  </button>
</form>
<label>
  Result: {result}  
</label>
  
    </div>
  );
}

export default App;
