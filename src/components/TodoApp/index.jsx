import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { TODO_APP_SCHEMA } from 'utils/validationSchemas';
import Task from './Task';
import TaskCreator from './TaskCreator';
import styles from './TodoApp.module.scss';

const initialValues = {
  text: '',
};

const taskData = [];

const TodoApp = props => {
  const [tasks, setTasks] = useState(taskData);

  const addTask = values => {
    const newTask = {
      text: values.text,
      id: Date.now(),
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  };
  const toggleTaskCompletion = id => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });

    setTasks(newTasks);
  };
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  return (
    <div className={styles.container}>
      <h2>Todo List</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={TODO_APP_SCHEMA}
        onSubmit={addTask}
      >
        <Form>
          <TaskCreator name='text' />
        </Form>
      </Formik>
      <ul className={styles.taskList}>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
