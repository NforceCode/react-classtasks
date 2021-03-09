import { Field } from 'formik';
import React from 'react';
import styles from './Task.module.scss';

const Task = (props) => {
  const {task:{text, isCompleted, id}, toggleTaskCompletion, deleteTask} = props;
  return (
    <li className={styles.container}>
      <input onChange={()=> {toggleTaskCompletion(id)}} type='checkbox' /> 
      <p >{text} </p>
      <input type='button' onClick={()=>{deleteTask(id)}} value='x'/>
    </li>
  );
}

export default Task;
