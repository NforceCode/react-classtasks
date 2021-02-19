import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Slider from './components/Slider';


const data = [
  {
    src: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-cosmic-reef-2400x1200.jpg?t=tn1200',
    heading: 'THE COSMIC REEF',
    text: 'LOREM IPSUM WHERE IS BUTTON FOR TOGGLING AUTO SLIDE OFF'
  },
  {
    src: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-lagoon-nebula.jpg?t=tn1200',
    heading: 'BULLSHIT 2',
    text: 'LOREM IPSUM WHERE IS BUTTON FOR TOGGLING AUTO SLIDE OFF'
  },
  {
    src: 'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-hh24.jpg?t=tn1200',
    heading: 'PLZ MAKE IT STOP',
    text: 'LOREM IPSUM WHERE IS BUTTON FOR TOGGLING AUTO SLIDE OFF'
  },
]

const App = () => {
  return (
    <div className='App'>
      {/* <Slider data={data}/> */}
      <Counter />
    </div>
  );
}

export default App;
