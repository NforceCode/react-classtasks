import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    const {changeValue, step, text} = this.props
    return (
      <div>
        <button onClick={() =>{changeValue(step)}}>{text}</button>
      </div>
    );
  }
}

export default Button;
