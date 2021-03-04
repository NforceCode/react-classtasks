import React, { useContext } from 'react';
import StopWatch from '../components/StopWatch';
import { ThemeContext } from './../contexts';
import CONSTANTS from '../constants';
import cx from 'classnames';
import styles from './../common/styles/themes.module.scss';

const {THEMES} = CONSTANTS;

const Home = () => {

  const [theme, setTheme] = useContext(ThemeContext);

  const switchTheme = () => {
    if(theme === THEMES.DARK) {
      setTheme(THEMES.LIGHT);
    } else {
      setTheme(THEMES.DARK);
    }
    console.log(theme);
  }

  const classNames = cx({
    [styles.dark] : theme === THEMES.DARK,
    [styles.light] : theme === THEMES.LIGHT,
  })

  return (
    <div className={classNames}>
      <StopWatch/>
      <button onClick={switchTheme}>Switch Theme</button>
    </div>
  );
}

export default Home;
