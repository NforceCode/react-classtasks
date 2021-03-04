import React, { useState} from 'react';
import './App.css';
import PseudoChat from './pages/PseudoChat';
import { ThemeContext } from './contexts';
import Home from './pages/Home';
import CONSTANTS from './constants';

const {THEMES} = CONSTANTS;

const App = props => {

  const [theme, setTheme] = useState(THEMES.DARK);


  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Home />
    </ThemeContext.Provider>
  );
};

export default App;
