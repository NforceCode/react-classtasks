import React, { Component } from 'react';
import styles from './SlideContainer.module.css';
import cx from 'classnames';
import SliderControls from '../SliderControls';

class SlideContainer extends Component {  
  constructor(props) {
    super(props);
    this.state = {
      isImageFullscreen: false,
    }
  }

  handleKeyPress = (event) => {
    console.log(event);
  }
    
  toggleFullScreen =() => {
    const {isImageFullscreen} = this.state;
    // console.log(this);
    isImageFullscreen?document.exitFullscreen()
    : document.querySelector(`.${styles.image}`).requestFullscreen();

    document.onfullscreenchange = this.setState((state, props) => {return {isImageFullscreen: !state.isImageFullscreen}});
    // this.setState((state, props) => {return {isImageFullscreen: !state.isImageFullscreen}})
  }

  render() {
    const {imageData,changeSlide, slideId} = this.props;
    return (
      <>
        <SliderControls changeSlide={changeSlide}/>
      <div className={styles.slideContainer}>
        <button className={cx(styles.leftBtn, styles.btn)} onClick={()=> {changeSlide('-')}}>{`<`}</button>
        <div className={styles.imageWrapper}>
          <img tabIndex='0' onKeyPress={this.handleKeyPress} onClick={this.toggleFullScreen} className={styles.image}src={imageData[slideId].src} alt={imageData[slideId].alt} title={imageData[slideId].alt}/>
        </div>
        <button className={cx(styles.rightBtn, styles.btn)} onClick={()=> {changeSlide('+')}}>{`>`}</button>
      </div>
      </>
    );
  }
}

// document.onfullscreenchange = SlideContainer.
// })

export default SlideContainer;
