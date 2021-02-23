import React from 'react';
import './App.css';
import Counter from './components/Counter';
import FlexContainer from './components/FlexContainer';
import Slider from './components/Slider';
import WindowSizes from './components/WindowSizes';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const data = [
  {
    src:
      'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-cosmic-reef-2400x1200.jpg?t=tn1200',
    heading: 'THE COSMIC REEF',
    text: '1 LOREM IPSUM WHERE IS BUTTON FOR TOGGLING AUTO SLIDE OFF',
  },
  {
    src:
      'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-lagoon-nebula.jpg?t=tn1200',
    heading: 'BULLSHIT 2',
    text: '2 LOREM IPSUM WHERE IS BUTTON FOR TOGGLING AUTO SLIDE OFF',
  },
  {
    src:
      'https://hubblesite.org/files/live/sites/hubble/files/home/hubble-30th-anniversary/images/_images/hubble_30th_images/hubble-30th-hh24.jpg?t=tn1200',
    heading: 'PLZ MAKE IT STOP',
    text: '3 LOREM IPSUM WHERE IS BUTTON FOR TOGGLING AUTO SLIDE OFF',
  },
];

const App = () => {
  return (
    <div className='App'>
      <Router> 

        <nav>
    
          <ul>
            <li>
              <Link to='/slider' >Slider</Link>
            </li>
            <li>
              <Link to='/counter'>Counter</Link>
            </li>
            <li>
              <Link to='/windowsizes' >WindowSizes</Link>
            </li>
          </ul>

        </nav>

        <Switch>

          <Route path='/slider'>
            <Slider data={data}/>
          </Route>

          <Route path='/counter'>
            <Counter/>
          </Route>

          <Route path='/windowsizes'>
            <WindowSizes/>
          </Route>
        </Switch>
      </Router>
      {/* <Slider data={data} /> */}
      {/* <Counter /> */}
      {/* <WindowSizes /> */}
    </div>
  );
};

export default App;
