import React, { useState } from 'react';
import '../styles/TaskItem.css';
import { AiOutlineClose } from "react-icons/ai";

function TaskItem({ task, onDelete }) {
    const [isCompleted, setIsCompleted] = useState(false);
  
    const toggleComplete = () => {
      setIsCompleted(!isCompleted);
    };
  
    const handleDelete = (e) => {
      e.stopPropagation(); // Evita que el evento de clic se propague al elemento li
      onDelete(task);
    };
  
    return (
      <li 
        className={`task-item ${isCompleted ? 'completed' : ''}`}
        onClick={toggleComplete}
      >
        {task}
        <AiOutlineClose className="delete-icon" onClick={handleDelete} />
      </li>
    );
  }
  
  export default TaskItem;