import React, { Component } from 'react';
import AutoClicker from './AutoClicker';
import styles from './Counter.module.scss';
import cx from 'classnames';


class Counter extends Component {

  render() {
    const { step , changeMode, changeValue, className, changeStep} = this.props;

    const classes = {
      [className]: className,
      [styles.counterContainer] : true,
    }

    return (
      <div className={cx(classes)}>
        <label >Enter step:  {
          <input          
            type='number'
            placeholder='step'
            value={step}
            onChange={changeStep}
            className={styles.interactiveElem}
          />}</label>
        <button className={styles.interactiveElem} onClick={()=>{changeValue(step)}} children={`Do thing`} />
        <button className={styles.interactiveElem} onClick={changeMode}>Change Mode</button>
        <AutoClicker className={styles.interactiveElem} changeValue={changeValue} step={step}/>
      </div>
    );
  }
}

export default Counter;
