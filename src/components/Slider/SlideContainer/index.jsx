import React, { Component } from 'react';
import styles from './SlideContainer.module.css';
import cx from 'classnames';

class SlideContainer extends Component {  
  render() {
    const {imageData,changeSlide, slideId} = this.props;
    return (
      <div className={styles.slideContainer}>
        <button className={cx(styles.leftBtn, styles.btn)} onClick={()=> {changeSlide('-')}}>{`<`}</button>
        <div className={styles.imageWrapper}>
          <img className={styles.image}src={imageData[slideId].src} alt={imageData[slideId].alt}/>
        </div>
        <button className={cx(styles.rightBtn, styles.btn)} onClick={()=> {changeSlide('+')}}>{`>`}</button>
      </div>
    );
  }
}

export default SlideContainer;
