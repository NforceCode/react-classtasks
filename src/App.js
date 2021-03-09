import React, { useState } from 'react';
import './App.css';
import PseudoChat from 'pages/PseudoChat';
import { ThemeContext } from 'contexts';
import Home from 'pages/Home';
import CONSTANTS from './constants';
import UserList from 'components/UserListHooks';
import Slider from 'components/Slider';
import data from 'sliderData';
import SignUp from 'components/SignUp';
import OffCanvasMenu from 'components/Menu/OffCanvasMenu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Counter from 'components/Counter';
import TodoApp from 'components/TodoApp';

const { THEMES } = CONSTANTS;

const App = props => {
  const [theme, setTheme] = useState(THEMES.DARK);

  return (
    <Router>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <OffCanvasMenu />
        {/* <Home /> */}
        {/* <Slider data={data}/> */}
        {/* <SignUp/> */}
        <Switch>
          <Route exact path='/'>
            <div>home</div>
          </Route>
          <Route  path='/slider'>
            <Slider data={data} />
          </Route>
          <Route exact path='/counter'>
            <Counter/>
          </Route>
          <Route exact path='/404'>
            <div>This page has not been created yet. Return in one eternity</div>
          </Route>
          <Route path='/todo'>
            <TodoApp />
          </Route>
        </Switch>
      </ThemeContext.Provider>
    </Router>
  );
};

export default App;
