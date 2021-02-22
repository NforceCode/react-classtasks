import React, { Component } from 'react';
import styles from './SlideContainer.module.scss';
import cx from 'classnames';
import SliderControls from '../SliderControls';
import PropTypes from 'prop-types';

class SlideContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isImageFullscreen: false,
    };
  }

  handleFullScreenChangeEvents = () => {
    const { isImageFullscreen } = this.state;

    if (
      !isImageFullscreen &&
      !document.fullscreenElement &&
      !document.webkitIsFullScreen &&
      !document.mozFullScreen &&
      !document.msFullscreenElement
    ) {
      document.addEventListener('fullscreenchange', this.exitFullScreenHandler);
      document.addEventListener(
        'webkitfullscreenchange',
        this.exitFullScreenHandler
      );
      document.addEventListener(
        'mozfullscreenchange',
        this.exitFullScreenHandler
      );
      document.addEventListener(
        'MSFullscreenChange',
        this.exitFullScreenHandler
      );
    } else {
      document.removeEventListener(
        'fullscreenchange',
        this.exitFullScreenHandler
      );
      document.removeEventListener(
        'webkitfullscreenchange',
        this.exitFullScreenHandler
      );
      document.removeEventListener(
        'mozfullscreenchange',
        this.exitFullScreenHandler
      );
      document.removeEventListener(
        'MSFullscreenChange',
        this.exitFullScreenHandler
      );
    }
  };

  exitFullScreenHandler = () => {
    if (
      !document.fullscreenElement &&
      !document.webkitIsFullScreen &&
      !document.mozFullScreen &&
      !document.msFullscreenElement
    ) {
      this.handleFullScreenChangeEvents();

      this.setState((state, props) => {
        return { isImageFullscreen: false };
      });
    }
  };

  toggleFullScreen = () => {
    const { isImageFullscreen } = this.state;
    this.setState((state, props) => {
      return { isImageFullscreen: !state.isImageFullscreen };
    });
    if (
      !isImageFullscreen &&
      !document.fullscreenElement &&
      !document.webkitIsFullScreen &&
      !document.mozFullScreen &&
      !document.msFullscreenElement
    ) {
      document.querySelector(`.${styles.image}`).requestFullscreen();
    } else {
      document.exitFullscreen();
    }
    this.handleFullScreenChangeEvents();
  };

  render () {
    const { imageData, changeSlide, slideId } = this.props;
    return (
      <>
        <SliderControls changeSlide={changeSlide} />
        <div className={styles.slideContainer}>
          <button
            className={cx(styles.leftBtn, styles.btn)}
            onClick={() => {
              changeSlide('-');
            }}
          >{`<`}</button>
          <div className={styles.imageWrapper}>
            <img
              onClick={this.toggleFullScreen}
              className={cx(styles.image)}
              src={imageData[slideId].src}
              alt={imageData[slideId].alt}
              title={imageData[slideId].alt}
            />
          </div>
          <button
            className={cx(styles.rightBtn, styles.btn)}
            onClick={() => {
              changeSlide('+');
            }}
          >{`>`}</button>
        </div>
      </>
    );
  }
}

const imageDataPropType = PropTypes.shape({
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});

SlideContainer.propTypes = {
  imageData: PropTypes.arrayOf(imageDataPropType).isRequired,
  changeSlide: PropTypes.func,
  slideId: PropTypes.number.isRequired,
};

export default SlideContainer;
