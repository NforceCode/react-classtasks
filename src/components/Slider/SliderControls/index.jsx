import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SliderControls.module.scss';
import cx from 'classnames';

class SliderControls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAutoSliderTurnedOn: false,
      autoSliderSpeedS: 1,
    }
    this.timeoutId = null
  }

  changeValue = ({target: {value}}) => {
    this.setState((state, props) => {
      return {autoSliderSpeedS: value * 1000};
    })
  }

  tick() {
    const {changeSlide} = this.props
    const {autoSliderSpeedS} = this.state;

    changeSlide('+');
    this.timeoutId = setTimeout( ()=>{ this.tick()} , autoSliderSpeedS * 1000);
  }

  toggleAutoSlide = () => {
    const {autoSliderSpeedS} = this.state;
    this.setState((state, props) => {
      return {isAutoSliderTurnedOn: !state.isAutoSliderTurnedOn};
    })
    if(this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null
      return
    }
    this.timeoutId = setTimeout(()=>{
      this.tick();
    }, autoSliderSpeedS * 1000)
  }

  
  
  render() {
    const {isAutoSliderTurnedOn, autoSliderSpeedS} = this.state;
    const btnStyles = {
     [styles.btn] : true,
     [styles.start] : !isAutoSliderTurnedOn,
     [styles.stop] : isAutoSliderTurnedOn,
   }
    return (
      <div className={styles.controlsContainer}>
        <button className={cx(btnStyles)} onClick={this.toggleAutoSlide}>{isAutoSliderTurnedOn? `Turn AutoSlider off`:`Turn AutoSlider on`}</button>
        <label>AutoSlider interval : <input className={styles.input} type="number" placeholder='interval of autoslide' value={autoSliderSpeedS} onChange={this.changeValue}/> s</label>
      </div>
    );
  }
}

SliderControls.propTypes = {
  changeSlide: PropTypes.func
}

export default SliderControls;
