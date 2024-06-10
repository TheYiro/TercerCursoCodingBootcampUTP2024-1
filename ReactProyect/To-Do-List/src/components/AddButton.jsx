import React from 'react';
import '../styles/AddButton.css';

function AddButton({ onAddTask }) {
  return (
    <button onClick={onAddTask} className="add-button">
      Agregar
    </button>
  );
}

export default AddButton;