import React, { useState, useEffect } from 'react';

const TaskForm = ({ addTask, editTask, currentTask, isEditing, clearEditing }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  useEffect(() => {
    if (isEditing) {
      setTaskName(currentTask.name);
      setTaskDescription(currentTask.description);
    }
  }, [currentTask, isEditing]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName && taskDescription) {
      if (isEditing) {
        editTask({ ...currentTask, name: taskName, description: taskDescription });
      } else {
        addTask({ name: taskName, description: taskDescription });
      }
      setTaskName('');
      setTaskDescription('');
      clearEditing();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        required
      />
      <textarea
        placeholder="Task Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        required
      />
      <button type="submit">{isEditing ? 'Update Task' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
//taskform