import React from 'react';
import Counter from './Counter';
import CounterInfo from './CounterInfo';

class CounterController extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      step : 1,
      counter: 0,
      isIncrementing: true
    }
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

  changeStep = ({target: {value}}) => {
    this.setState({step: Number(value)})
  }
  
  render() {
    const {step, counter, isIncrementing} = this.state;
    return (
      <div className='CounterController'>
        <input type='number' placeholder='step' value={step}  onChange={this.changeStep}/>
        <Counter step={step}  counter={counter} changeMode={this.changeMode}  changeValue={this.changeValue}/>
        <CounterInfo step={step} counter={counter} isIncrementing={isIncrementing} />
      </div>
    );
  }
}

export default CounterController;
