import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { TODO_APP_SCHEMA } from 'utils/validationSchemas';
import Task from './Task';
import TaskCreator from './TaskCreator';
import {useTodo} from 'hooks/index';
import styles from './TodoApp.module.scss';

const initialValues = {
  text: '',
};

const taskData = [];

const TodoApp = props => {

  const {tasks, addTask, deleteTask, toggleTaskCompletion} = useTodo(taskData);
  
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
