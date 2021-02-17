import React from 'react';
import Counter from './Counter';
import CounterInfo from './CounterInfo';
import styles from './CounterController.module.css';
import cog from './cog-outline.svg';

class CounterController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      counter: 0,
      isIncrementing: true,
      isControlsHidden: false,
    };
  }

  toggleContorlsVisibility = () => {
    this.setState((prevState, props) => {
      return { isControlsHidden: !prevState.isControlsHidden };
    });
  };

  changeValue = (number) => {
    const { counter, isIncrementing } = this.state;
    let newCounter;
    isIncrementing
      ? (newCounter = counter + number)
      : (newCounter = counter - number);

    this.setState({ counter: newCounter });
  };

  changeMode = () => {
    const { isIncrementing } = this.state;
    this.setState({ isIncrementing: !isIncrementing });
  };

  changeStep = ({ target: { value } }) => {
    this.setState({ step: Number(value) });
  };

  render() {
    const { step, counter, isIncrementing, isControlsHidden } = this.state;
    return (
      <div className={styles.counterController}>
        <div
          onClick={this.toggleContorlsVisibility}
          className={styles.controlsBtn}
          children={<img className={styles.img} src={cog} alt='settings'/>}
        />
        <label className={isControlsHidden ? styles.hidden : ''}>Enter step:  {<input
          
          type='number'
          placeholder='step'
          value={step}
          onChange={this.changeStep}
        />}</label>
        <Counter
          className={isControlsHidden ? styles.hidden : ''}
          step={step}
          counter={counter}
          changeMode={this.changeMode}
          changeValue={this.changeValue}
        />
        <CounterInfo
          step={step}
          counter={counter}
          isIncrementing={isIncrementing}
        />
      </div>
    );
  }
}

export default CounterController;
