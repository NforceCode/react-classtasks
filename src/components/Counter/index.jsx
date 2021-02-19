import React from 'react';
import CounterBody from './CounterBody';
import CounterInfo from './CounterInfo';
import styles from './Counter.module.scss';
import cog from './cog-outline.svg';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      counter: 0,
      isIncrementing: true,
      isControlsHidden: true,
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
      <div className={styles.counter}>
        <div
          onClick={this.toggleContorlsVisibility}
          className={styles.controlsBtn}
          children={<img className={styles.img} src={cog} alt='settings'/>}
        />
        <CounterBody
          className={isControlsHidden ? styles.hidden : ''}
          step={step}
          changeStep = {this.changeStep}
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

export default Counter;
