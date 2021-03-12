import React from 'react';
import { ErrorMessage, Field } from 'formik';
import cx from 'classnames';
import styles from './TaskCreator.module.scss';

const TaskCreator = props => {
  const { name } = props;

  return (
    <div className={styles.container}>
      <div className={ styles.inputContainer}>
        <Field name={name}>
          {({ field, meta }) => {
            const inputStyles = cx(styles.input, {
              [styles.invalidInput]: meta.touched && meta.error,
            });
            return (
              <input
                type='text'
                {...field}
                name={name}
                className={inputStyles}
              />
            );
          }}
        </Field>
      </div>
      <div className={styles.submitContainer}>
        <input type='submit' className={styles.submit} value='Add task'/>
      </div>
      <ErrorMessage name={name} component='div' className={styles.error} />
    </div>
  );
};

export default TaskCreator;
