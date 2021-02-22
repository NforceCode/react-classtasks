import React, { Component } from 'react';
import cx from 'classnames';

class AutoClicker extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isTurnedOn: false,
      clickIntervalMs: 1000,
      turnedOnForMs: 0,
    };
    this.intervalId = null;
  }

  handleChange = ({ target: { value } }) => {
    this.setState({ clickIntervalMs: value });
  };

  toggleAutoClicker = () => {
    const { isTurnedOn } = this.state;
    this.setState((prevState, props) => {
      let newTurndeOnMs;
      isTurnedOn
        ? (newTurndeOnMs = 0)
        : (newTurndeOnMs = Number(prevState.turnedOnForMs));
      return {
        isTurnedOn: !prevState.isTurnedOn,
        turnedOnForMs: newTurndeOnMs,
      };
    });
  };

  startClicking = (value, interval) => {
    const { changeValue } = this.props;
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        changeValue(value);
        this.setState((prevState, props) => {
          return {
            turnedOnForMs: Number(prevState.turnedOnForMs) + Number(interval),
          };
        });
      }, interval);
    }
  };
  stopClicking = () => {
    clearInterval(this.intervalId);
    this.intervalId = null;
  };

  componentDidMount () {
    this.toggleAutoClicker();
    setTimeout(() => {
      this.toggleAutoClicker();
    }, 31000);
  }
  componentDidUpdate () {
    const { step } = this.props;
    const { isTurnedOn, clickIntervalMs } = this.state;
    isTurnedOn
      ? this.startClicking(step, clickIntervalMs)
      : this.stopClicking();
  }

  componentWillUnmount () {
    this.stopClicking();
  }

  render () {
    const { className } = this.props;
    const { isTurnedOn, clickIntervalMs, turnedOnForMs } = this.state;
    return (
      <div>
        <button className={cx(className)} onClick={this.toggleAutoClicker}>
          {isTurnedOn ? `Turn off AutoClick` : `Turn on AutoClick`}
        </button>
        <input
          className={cx(className)}
          type='number'
          value={clickIntervalMs}
          onChange={this.handleChange}
        />
        <p style={{ margin: 0 }}>
          {isTurnedOn
            ? `Autoclicker is working for ${turnedOnForMs / 1000} seconds`
            : `Autoclicker isn't working right now`}
        </p>
      </div>
    );
  }
}

export default AutoClicker;
