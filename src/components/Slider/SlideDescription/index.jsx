import React, { Component } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

class SlideDescription extends Component {
  render() {
    const {textData, slideId} = this.props;

    return (
      <div>
        <h2>{textData[slideId].heading}</h2>
        <p>{textData[slideId].text}</p>
      </div>
    );
  }
}

const textDataPropType = PropTypes.shape({
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
})

SlideDescription.propTypes ={
  textData : PropTypes.arrayOf(textDataPropType),
  slideId: PropTypes.number
}

export default SlideDescription;
