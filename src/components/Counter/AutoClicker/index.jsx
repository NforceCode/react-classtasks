import React, { Component } from 'react';

class AutoClicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTurnedOn : false,
      clickIntervalMs : 1000,
    }
    this.intervalId = null;
  }
  
  handleChange = ({target:{value}}) => {
    this.setState({clickIntervalMs: value})
  }

  toggleAutoClicker = () => {
    const {isTurnedOn} = this.state;
    this.setState({isTurnedOn : !isTurnedOn});
  }

  startClicking = (value, interval) => {
    const {changeValue} = this.props;
    if(!this.intervalId){
      this.intervalId= setInterval(()=>{changeValue(value)},interval);
    }
  }
  stopClicking = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  componentDidMount () {
    this.toggleAutoClicker();
    setTimeout(() => {
      this.toggleAutoClicker();
    }, 31000);
  }
  componentDidUpdate () {
    const {step} = this.props;
    const {isTurnedOn, clickIntervalMs} = this.state;
    isTurnedOn? this.startClicking(step,clickIntervalMs) : this.stopClicking();
  }

  componentWillUnmount () {
    this.stopClicking();
  } 

  render() {
    const {isTurnedOn, clickIntervalMs} = this.state;
    return (
      <div>
        <button onClick={this.toggleAutoClicker}>{isTurnedOn? `Turn off AutoClick` : `Turn on AutoClick`}</button>
        <input type="number" value={clickIntervalMs} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default AutoClicker;
