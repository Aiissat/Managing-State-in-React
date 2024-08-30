import React from 'react';

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <li className={task.completed ? 'completed' : ''}>
      <span onClick={() => onToggleComplete(task.id)}>
        {task.completed ? '✅' : '⬜'} {task.name}
      </span>
      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </li>
  );
};

export default TaskItem;
