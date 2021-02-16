import React from 'react';
import Counter from '../Counter';

class CounterController extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      step : 1,
    }
  }

  changeStep = ({target: {value}}) => {
    this.setState({step: Number(value)})
  }
  
  render() {
    const {step} = this.state;
    return (
      <div className='CounterController'>
        <input type='number' placeholder='step' value={step}  onChange={this.changeStep}/>
        <Counter step={step} />
      </div>
    );
  }
}

export default CounterController;
