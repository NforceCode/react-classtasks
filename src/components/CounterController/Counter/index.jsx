import React, { Component } from 'react';
import AutoClicker from './AutoClicker';
import styles from './Counter.module.css';
import cx from 'classnames';


class Counter extends Component {

  render() {
    const { step , changeMode, changeValue, className} = this.props;

    const classes = {
      [className]: className,
    }

    return (
      <div className={cx(classes)}>
        <button className={styles.interactiveElem} onClick={()=>{this.changeValue(step)}} children={`Do thing`} />
        <button className={styles.interactiveElem} onClick={changeMode}>Change Mode</button>
        <AutoClicker className={styles.interactiveElem} changeValue={changeValue} step={step}/>
      </div>
    );
  }
}

export default Counter;
