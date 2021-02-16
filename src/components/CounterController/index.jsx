import React, { Component } from 'react';

class CounterController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: props.step
    }
  }

  handleChange = ({target}) => {
    const {changeStep} = this.props;
    changeStep(Number(target.value));
  }
  
  render() {
    const {step} = this.props;
    return (
      <div>
        <input type='number' placeholder='step' value={step}  onChange={this.handleChange}/>
      </div>
    );
  }
}

export default CounterController;
