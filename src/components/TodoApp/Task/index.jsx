import React from 'react';
import cx from 'classnames';
import styles from './Task.module.scss';

const Task = props => {
  const {
    task: { text, isCompleted, id },
    toggleTaskCompletion,
    deleteTask,
  } = props;
  const taskStyles = cx(styles.task,{
    [styles.completed]: isCompleted,
  });
  return (
    <li className={styles.container}>
      <input
        onChange={() => {
          toggleTaskCompletion(id);
        }}
        type='checkbox'
      />
      <p className={taskStyles}>{text} </p>
      <input
        type='button'
        className={styles.deleteBtn}
        onClick={() => {
          deleteTask(id);
        }}
        value='x'
      />
    </li>
  );
};

export default Task;
