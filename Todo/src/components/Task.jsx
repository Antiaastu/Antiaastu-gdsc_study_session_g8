import React from 'react';

const Task = ({ task, onDelete, onComplete }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
       <button  onClick={() => onComplete(task.id)}>
        {task.completed ? 'Undo' : 'Done'}
      </button>
      <p>{task.text}</p>
      <button onClick={() => onDelete(task.id)}>X</button>
     
    </div>
  );
};

export default Task;
