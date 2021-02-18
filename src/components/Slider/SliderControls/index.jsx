import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SliderControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAutoSliderTurnedOn: false,
      autoSliderSpeedMs: 5000,
    }
    this.intervalId = null
  }

  changeValue = ({target: {value}}) => {
    // const {autoSliderSpeedMs} = this.state;

    this.setState((state, props) => {
      return {autoSliderSpeedMs: value * 1000};
    })
  }

  toggleAutoSlide = () => {
    const {changeSlide} = this.props
    const {autoSliderSpeedMs} = this.state;
    this.setState((state, props) => {
      return {isAutoSliderTurnedOn: !state.isAutoSliderTurnedOn};
    })
    if(this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null
      return
    }
    this.intervalId = setInterval(()=>{
      changeSlide('+')
    }, autoSliderSpeedMs)
  }

  render() {
    const {isAutoSliderTurnedOn, autoSliderSpeedMs} = this.state;
    return (
      <div>
        <button onClick={this.toggleAutoSlide}>{isAutoSliderTurnedOn? `Turn AutoSlider off`:`Turn AutoSlider on`}</button>
        <input type="number" placeholder='interval of autoslide' value={autoSliderSpeedMs/1000} onChange={this.changeValue}/>
      </div>
    );
  }
}

SliderControls.propTypes = {
  changeSlide: PropTypes.func
}

export default SliderControls;
