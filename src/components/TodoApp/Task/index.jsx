import React from 'react';
import cx from 'classnames';
import styles from './Task.module.scss';

const Task = props => {
  const {
    task: { text, isCompleted, id },
    toggleTaskCompletion,
    deleteTask,
  } = props;

  const containerStyles = cx(styles.container, {
    [styles.completedContainer]: isCompleted,
  });

  const taskStyles = cx(styles.task, {
    [styles.completed]: isCompleted,
  });
  return (
    <li className={containerStyles}>
      <div className={styles.taskContainer} onClick={() => {
        toggleTaskCompletion(id);
      }}>
        {/* <div className={styles.controlsContainer}>
          <input
            // onChange={() => {
            //   toggleTaskCompletion(id);
            // }}
            defaultChecked={isCompleted}
            type='checkbox'
          />
        </div> */}

        <p className={taskStyles}>{text}</p>
      </div>
      <div className={styles.controlsContainer}>
        <input
          type='button'
          className={styles.deleteBtn}
          onClick={() => {
            deleteTask(id);
          }}
          value='Delete'
        />
      </div>
    </li>
  );
};

export default Task;
