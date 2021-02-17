import React, { Component } from 'react';

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
