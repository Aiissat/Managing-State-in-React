import React from 'react';
import TaskItem from './TaskItem';
const TaskList = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
//tasklist
