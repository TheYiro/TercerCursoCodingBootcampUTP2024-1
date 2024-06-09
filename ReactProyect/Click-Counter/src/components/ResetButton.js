import React from 'react';
import '../styles/Buttons.css'

function ResetButton({ onReset }) {
  return (
    <button onClick={onReset} className="reset-button">
      Reiniciar
    </button>
  );
}

export default ResetButton;
