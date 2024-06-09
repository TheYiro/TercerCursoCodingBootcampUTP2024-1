import React, { useState } from 'react';
import CounterButton from './components/CounterButton';
import Screen from './components/Screen';
import ResetButton from './components/ResetButton';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Contador de Clicks</h1><br></br>
        <Screen count={count} /> <br></br>
        <CounterButton onIncrement={incrementCount} /> <br></br>
        <ResetButton onReset={resetCount} />
       <br></br> <a href='https://github.com/TheYiro' className='joaco'><h5><i>By: Joaco </i></h5></a>
      </header>
    </div>
  );
}

export default App;