import React, { Component } from 'react';
import AutoClicker from './AutoClicker';
import Button from './Button';

const spanStyleIncrementing = {
  color: 'green',
};
const spanStyleDecrementing = {
  color: 'red',
};

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      isIncrementing: true,
    };
  }

  changeValue = (number) => {
    const { counter, isIncrementing } = this.state;
    let newCounter;
    isIncrementing ? (newCounter = counter + number) : (newCounter = counter - number);

    this.setState({ counter: newCounter });
  };

  changeMode = () => {
    const { isIncrementing } = this.state;
    this.setState({ isIncrementing: !isIncrementing });
  };

  render() {
    const { step } = this.props;
    const { counter, isIncrementing } = this.state;
    return (
      <div>
        <Button changeValue={this.changeValue} step={step} text={`Do thing`} />
        <button onClick={this.changeMode}>Change Mode</button>
        <AutoClicker changeValue={this.changeValue} step={step}/>
        <div>Current number: {counter}</div>
        <div>
          Current action:{' '}
          <span style={isIncrementing? spanStyleIncrementing : spanStyleDecrementing}>
            {isIncrementing ? `Adding ${step}` : `Subtracting ${step}`}
          </span>
        </div>
      </div>
    );
  }
}

export default Counter;
