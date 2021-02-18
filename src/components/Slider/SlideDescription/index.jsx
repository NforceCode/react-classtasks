import React, { Component } from 'react';
import cx from 'classnames';

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

export default SlideDescription;
