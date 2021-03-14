import { useState, useEffect } from 'react';

export function useTodo (taskData) {
  const [tasks, setTasks] = useState(taskData);

  return {
    tasks,
    setTasks,
    addTask: (values, actions) => {
      const newTask = {
        text: values.text,
        id: Date.now(),
        isCompleted: false,
      };

      setTasks([...tasks, newTask]);
      actions.resetForm();
    },
    toggleTaskCompletion: id => {
      const newTasks = tasks.map(task => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });

      setTasks(newTasks);
    },
    deleteTask: id => {
      setTasks(tasks.filter(task => task.id !== id));
    },
  };
}
