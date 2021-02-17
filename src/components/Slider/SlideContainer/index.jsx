import React, { Component } from 'react';
import styles from './SlideContainer.module.css'

class SlideContainer extends Component {  
  render() {
    const {imageData,changeSlide, slideId} = this.props;
    return (
      <div className={styles.slideContainer}>
        <button className={styles.leftBtn} onClick={()=> {changeSlide('-')}}>{`<`}</button>
        <div className={styles.imageWrapper}>
          <img className={styles.image}src={imageData[slideId].src} alt={imageData[slideId].alt}/>
        </div>
        <button className={styles.rightBtn} onClick={()=> {changeSlide('+')}}>{`>`}</button>
      </div>
    );
  }
}

export default SlideContainer;
