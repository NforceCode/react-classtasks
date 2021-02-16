import React, { Component } from 'react';
import AutoClicker from './AutoClicker';



class Counter extends Component {

  render() {
    const { step , changeMode, changeValue} = this.props;

    return (
      <div>
        <button onClick={()=>{this.changeValue(step)}} children={`Do thing`} />
        <button onClick={changeMode}>Change Mode</button>
        <AutoClicker changeValue={changeValue} step={step}/>
      </div>
    );
  }
}

export default Counter;
