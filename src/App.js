import './App.css';
import React from 'react';
import CounterController from './components/CounterController';
import Counter from './components/Counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      step : 1,
    }
  }

  changeStep = (number) => {
    this.setState({step: number})
  }
  
  render() {
    const {step} = this.state;
    return (
      <div className='App'>
        <CounterController step={step}  changeStep={this.changeStep}/>
        <Counter step={step} />
      </div>
    );
  }
}

export default App;
