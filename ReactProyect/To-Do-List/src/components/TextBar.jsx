import React, { useState } from 'react';
import AddButton from './AddButton';
import '../styles/TextBar.css';

function TextBar({ addTask }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      addTask(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="bar">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Escribe una tarea..."
      />
      <AddButton onAddTask={handleAddTask} />
    </div>
  );
}

export default TextBar;
