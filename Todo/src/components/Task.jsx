import React from 'react';

const Task = ({ task, onDelete, onComplete }) => {
  return (
    <div className={`task ${task.completed ? 'completed' : ''}`}>
      <p>{task.text}</p>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      <button onClick={() => onComplete(task.id)}>
        {task.completed ? 'Undo' : 'Complete'}
      </button>
    </div>
  );
};

export default Task;
