import React from 'react';
import styles from './CounterInfo.module.css'

const CounterInfo = (props) => {
  const { isIncrementing, step, counter } =props;
  return (
    <div className={styles.componentContainer}>
      <p className={styles.textContainer}>Current number: {counter}</p>
      <p className={styles.textContainer}>
        Current action:{' '}
        <span
          className={isIncrementing ? styles.spanStyleIncrementing : styles.spanStyleDecrementing}
        >
          {isIncrementing ? `Adding ${step}` : `Subtracting ${step}`}
        </span>
      </p>
    </div>
  );
};

export default CounterInfo;
