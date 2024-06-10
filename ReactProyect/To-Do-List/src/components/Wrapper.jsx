import React, { useState } from 'react';
import TextBar from './TextBar';
import TaskList from './TaskList';
import '../styles/Wrapper.css';


function Wrapper() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="wrapper">
      <h1>Lista de Tareas</h1>
      <div className="task-input">
        <TextBar addTask={addTask} />
      </div>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default Wrapper;