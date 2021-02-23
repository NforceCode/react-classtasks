import React, { Component } from 'react';
import PropTypes from 'prop-types';

class WindowSizes extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentWidth: 0,
      currentHeight: 0,
    };
  }

  componentDidMount () {
    window.addEventListener('resize', this.checkSize);
    this.setState({
      currentWidth: window.innerWidth,
      currentHeight: window.innerHeight,
    });
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.checkSize);
  }

  checkSize = () => {
    const { currentHeight, currentWidth } = this.state;

    if (
      window.innerHeight !== currentHeight ||
      currentWidth !== window.innerWidth
    ) {
      this.setState({
        currentWidth: window.innerWidth,
        currentHeight: window.innerHeight,
      });
    }
  };

  render () {
    const { currentHeight, currentWidth } = this.state;
    return (
      <div>
        <p>Current width of viewport is {currentWidth}</p>
        <p>Current height of viewport is {currentHeight}</p>
      </div>
    );
  }
}

WindowSizes.propTypes = {};

export default WindowSizes;
