import React, { Component } from 'react';
import SlideContainer from './SlideContainer';
import SlideDescription from './SlideDescription';
import styles from './Slider.module.scss';
import cx from 'classnames';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideId : 0,
    }
  }

  changeSlide = (operator) => {
    const {data} =this.props;
    const {slideId} = this.state; 
    operator==='+'? this.setState({slideId: (slideId +1) % data.length}) : this.setState({slideId: (slideId - 1 + data.length) % data.length})
  }
  
  render() {
    const {data} = this.props;
    const {slideId} = this.state;
    const images = data.map((elem) => ({ src: elem.src, alt: elem.heading}));
    const textData = data.map((elem) => ({ heading: elem.heading, text: elem.text}));
    return (
      <section className={cx(styles.slider)}>
        <SlideContainer imageData={images} slideId={slideId} changeSlide={this.changeSlide} />
        <SlideDescription textData={textData} slideId={slideId}/>
      </section>
    );
  }
}

export default Slider;
