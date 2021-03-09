import React from 'react';
import { ErrorMessage, Field } from 'formik';
import cx from 'classnames';
import styles from './TaskCreator.module.scss';

const TaskCreator = props => {
  const { name } = props;
  return (
    <div className={styles.container}>
      <Field type='text' name={name} className={styles.input}/><input type='submit' className={styles.submit}/>
      <ErrorMessage name={name} component='div' className={styles.error}/>
    </div>
  );
};

export default TaskCreator;
