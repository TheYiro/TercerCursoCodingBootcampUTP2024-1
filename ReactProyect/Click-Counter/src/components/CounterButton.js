import React from 'react';
import '../styles/Buttons.css'

function CounterButton({ onIncrement }) {
  return (
    <button onClick={onIncrement}>Pls Click Me!</button>
  );
}

export default CounterButton;
